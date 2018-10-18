import React                   from 'react';
import PropTypes               from 'prop-types';
import TextField               from '@material-ui/core/TextField';
import Snackbar                from '@material-ui/core/Snackbar';
import SnackbarContent         from '@material-ui/core/SnackbarContent';
import WarningIcon             from '@material-ui/icons/Warning';
import DoneIcon                from '@material-ui/icons/Done';
import styled                  from 'styled-components';
import * as R                  from 'ramda';
import { gql, graphql }        from 'react-apollo';
import moment                  from 'moment';
import {
  CountryDropdown,
  RegionDropdown,
}                              from 'react-country-region-selector';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                              from 'recompose';
import { DateTimePicker }      from 'material-ui-pickers';
import DateFnsUtils            from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

import GradientButton          from '../../../layouts/gradient_button';
import Alert                   from '../../../layouts/alert';

const EditEventForm = ({
  currentEvent: {
    id,
    title,
    details,
    price,
    date,
    country,
    region,
    address,
  },
  handleChange,
  handleFieldChange,
  updateEvent,
  hasError,
  errorsList,
  hideAlert,
}) => (
  <div>
    <EditEventForm.Headline>
      Edit event
    </EditEventForm.Headline>
    <form>
      <EditEventForm.InputsWrapper>
        <TextField
          name="title"
          label="Title"
          margin="normal"
          value={title}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="details"
          label="details"
          margin="normal"
          value={details}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Price"
          value={price}
          name="price"
          onChange={handleChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} moment={moment}>
          <DateTimePicker
            keyboard
            label="Started at"
            minDate={Date.now()}
            value={date}
            format="yyyy-MM-dd hh:mm A"
            disableOpenOnEnter
            mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            onChange={handleFieldChange.bind(null, 'date')}
          />
        </MuiPickersUtilsProvider>
        <EditEventForm.CountryDropdown
          value={country}
          onChange={handleFieldChange.bind(null, 'country')}
        />
        <EditEventForm.RegionDropdown
          country={country}
          value={region}
          onChange={handleFieldChange.bind(null, 'region')}
        />
        <TextField
          name="address"
          label="address"
          margin="normal"
          value={address}
          onChange={handleChange}
          fullWidth
        />
      </EditEventForm.InputsWrapper>
      <GradientButton
        text={'Update'}
        onClick={updateEvent}
      />
    </form>
    <Alert
      action="update"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </div>
);

EditEventForm.InputsWrapper = styled.div`
  display        : flex;
  flex-direction : column;
`;

EditEventForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

EditEventForm.CountryDropdown = styled(CountryDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

EditEventForm.RegionDropdown = styled(RegionDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

EditEventForm.propTypes = {
  currentEvent      : PropTypes.object.isRequired,
  handleChange      : PropTypes.func.isRequired,
  handleFieldChange : PropTypes.func.isRequired,
  updateEvent       : PropTypes.func.isRequired,
  hasError          : PropTypes.bool.isRequired,
  errorsList        : PropTypes.array.isRequired,
  hideAlert         : PropTypes.func.isRequired,
};

const updateEventMutation = gql`
  mutation($eventId: Int!, $title: String!, $details: String!, $price: Float!, $date: String!, $country: String!, $region: String!, $address: String!) {
    updateEvent(eventId: $eventId, title: $title, details: $details, price: $price, date: $date, country: $country, region: $region, address: $address) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const withRecompose = compose(
  graphql(updateEventMutation),
  withStateHandlers(
    ({
      currentEvent = {
        title   : '',
        details : '',
        price   : '',
        date    : (new Date()).toString(),
        country : '',
        region  : '',
        address : '',
      },
      hasError    = false,
      errorsList  = [],
    }) => ({ currentEvent, hasError, errorsList }),
    {
      handleChange      : state => ({ target }) => {
        const currentEvent = R.assoc(target.name, target.value, state.currentEvent);
        return ({ currentEvent });
      },

      handleFieldChange : state => (field, value) => {
        const currentEvent = R.assoc(field, value, state.currentEvent);
        return ({ currentEvent });
      },

      showAlert         : () => () => ({ hasError: true }),
      hideAlert         : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    updateEvent : ({ mutate, currentEvent, errorsList, showAlert }) => async () => {
      const response = await mutate({
        variables: {
          eventId : currentEvent.id,
          title   : currentEvent.title,
          details : currentEvent.details,
          price   : currentEvent.price,
          date    : currentEvent.date,
          country : currentEvent.country,
          region  : currentEvent.region,
          address : currentEvent.address,
        }
      });

      const { ok, errors } = response.data.updateEvent;

      if (ok) {
        showAlert();
      } else {
        let messageText = null;
        errors.map((msg) => messageText = msg.message);

        if (!errorsList.includes(messageText)) {
          errorsList.push(messageText);
        }
        showAlert();
        errorsList.pop();
      }
    },
  })
);

export default withRecompose(EditEventForm);
