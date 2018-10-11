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
import { gql, graphql }        from 'react-apollo';
import {
  DatePicker,
  TimePicker,
}                              from 'material-ui-pickers';
import DateFnsUtils            from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

import GradientButton          from '../../../layouts/gradient_button';

const CreateEvent = ({
  form: {
    title,
    details,
    price,
    date,
    time,
    country,
    region,
  },
  handleChange,
  handleRegionChange,
  canSubmit,
  createEvent,
  handleDateChange,
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
          name="price"
          onChange={handleChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} moment={moment}>
          <DatePicker
            label="Date"
            format="YYYY/dd/MM"
            keyboard
            disableOpenOnEnter
            animateYearScrolling={false}
            value={date}
            onChange={handleDateChange.bind(null, 'date')}
          />
          <TimePicker
            clearable
            ampm={false}
            label="Time"
            value={time}
            onChange={handleDateChange.bind(null, 'time')}
          />
        </MuiPickersUtilsProvider>
        <CreateEvent.CountryDropdown
          value={country}
          onChange={handleRegionChange.bind(null, 'country')}
        />
        <CreateEvent.RegionDropdown
          country={country}
          value={region}
          onChange={handleRegionChange.bind(null, 'region')}
        />
      </CreateEvent.InputsWrapper>
      <GradientButton
        text={'Create'}
        disabled={!canSubmit}
        onClick={createEvent}
      />
    </form>
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
  handleReginChange : PropTypes.func.isRequired,
};

const canSubmitForm = ({
  title,
  details,
  price,
  country,
  region,
}) => R.all(R.equals(true))([
  !R.isEmpty(title),
  !R.isEmpty(details),
  !R.isEmpty(price),
  !R.isEmpty(country),
  !R.isEmpty(region),
]);

const createEventMutation = gql`
  mutation($title: String!, $details: String!, $price: Float!, $country: String!, $region: String!) {
    createEvent(title: $title, details: $details, price: $price, country: $country, region: $region) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const withRecompose = compose(
  graphql(createEventMutation),
  withStateHandlers(
    ({
      form      = {
        title   : '',
        details : '',
        price   : '',
        date    : '',
        time    : '',
        country : '',
        region  : '',
      },
      canSubmit = false,
    }) => ({ form, canSubmit }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },

      handleRegionChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({
          form,
          canSubmit     : canSubmitForm(form),
        });
      },

      handleDateChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({
          form,
          canSubmit     : canSubmitForm(form),
        });
      },
    },
  ),
  withHandlers({
    createEvent : ({mutate, form}) => async () => {
      const response = await mutate({
        variables: form
      });
    },
  })
);

export default withRecompose(CreateEvent);
