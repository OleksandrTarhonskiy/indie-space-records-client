import React                   from 'react';
import PropTypes               from 'prop-types';
import TextField               from '@material-ui/core/TextField';
import styled                  from 'styled-components';
import * as R                  from 'ramda';
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
import { graphql }             from 'react-apollo';
import { DateTimePicker }      from 'material-ui-pickers';
import DateFnsUtils            from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

import GradientButton          from '../../../layouts/gradient_button';
import Alert                   from '../../../layouts/alert';
import { createEventMutation } from '../graphql/mutations';

const CreateEvent = ({
  form: {
    title,
    details,
    price,
    date,
    country,
    region,
    address,
  },
  handleChange,
  canSubmit,
  createEvent,
  handleFieldChange,
  hasError,
  errorsList,
  hideAlert,
}) => (
  <div>
    <CreateEvent.Headline>
      Create new event
    </CreateEvent.Headline>
    <form>
      <CreateEvent.InputsWrapper>
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
          InputProps={{ inputProps : { min : 0 } }}
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
        <CreateEvent.CountryDropdown
          value={country}
          onChange={handleFieldChange.bind(null, 'country')}
        />
        <CreateEvent.RegionDropdown
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
      </CreateEvent.InputsWrapper>
      <GradientButton
        disabled={!canSubmit}
        onClick={createEvent}
      >
        Create
      </GradientButton>
    </form>
    <Alert
      action="created"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </div>
);

CreateEvent.InputsWrapper = styled.div`
  display        : flex;
  flex-direction : column;
`;

CreateEvent.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

CreateEvent.CountryDropdown = styled(CountryDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

CreateEvent.RegionDropdown = styled(RegionDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

CreateEvent.propTypes = {
  form              : PropTypes.object.isRequired,
  canSubmit         : PropTypes.bool.isRequired,
  handleChange      : PropTypes.func.isRequired,
  handleFieldChange : PropTypes.func.isRequired,
  createEvent       : PropTypes.func.isRequired,
  hideAlert         : PropTypes.func.isRequired,
  errorsList        : PropTypes.array.isRequired,
  hasError          : PropTypes.bool.isRequired,
};

const canSubmitForm = ({
  title,
  details,
  price,
  date,
  country,
  region,
  address,
}) => R.all(R.equals(true))([
  !R.isEmpty(title),
  !R.isEmpty(details),
  !R.isEmpty(price),
  !R.isEmpty(date),
  !R.isEmpty(country),
  !R.isEmpty(region),
  !R.isEmpty(address),
]);

const withRecompose = compose(
  graphql(createEventMutation),
  withStateHandlers(
    ({
      form      = {
        title   : '',
        details : '',
        price   : '',
        date    : (new Date()).toString(),
        country : '',
        region  : '',
        address : '',
      },
      hasError   = false,
      errorsList = [],
      canSubmit  = false,
    }) => ({ form, canSubmit, hasError, errorsList }),
    {
      handleChange      : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({
          form,
          canSubmit     : canSubmitForm(form),
        });
      },

      handleFieldChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({
          form,
          canSubmit     : canSubmitForm(form),
        });
      },

      showAlert         : () => () => ({ hasError: true }),
      hideAlert         : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    createEvent : ({ mutate, form, errorsList, showAlert }) => async () => {
      const response = await mutate({
        variables: form,
      });

      const { ok, errors } = response.data.createEvent;

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

export default withRecompose(CreateEvent);
