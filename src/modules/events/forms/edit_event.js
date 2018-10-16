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
}                              from 'recompose';
import { DateTimePicker }      from 'material-ui-pickers';
import DateFnsUtils            from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

import GradientButton          from '../../../layouts/gradient_button';

const EditEvent = ({
  currentEvent: {
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
  currentEvent,
}) => (
  <div>
    <EditEvent.Headline onClick={() => console.log(currentEvent)}>
      Edit event
    </EditEvent.Headline>
    <form>
      <EditEvent.InputsWrapper>
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
        <EditEvent.CountryDropdown
          value={country}
          onChange={handleFieldChange.bind(null, 'country')}
        />
        <EditEvent.RegionDropdown
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
      </EditEvent.InputsWrapper>
      <GradientButton
        text={'Update'}
      />
    </form>
  </div>
);

EditEvent.InputsWrapper = styled.div`
  display        : flex;
  flex-direction : column;
`;

EditEvent.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

EditEvent.CountryDropdown = styled(CountryDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

EditEvent.RegionDropdown = styled(RegionDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

EditEvent.propTypes = {
  event             : PropTypes.object.isRequired,
  canSubmit         : PropTypes.bool.isRequired,
  handleChange      : PropTypes.func.isRequired,
  handleFieldChange : PropTypes.func.isRequired,
};

const withRecompose = compose(
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
    }) => ({ currentEvent }),
    {
      handleChange      : state => ({ target }) => {
        const currentEvent = R.assoc(target.name, target.value, state.currentEvent);
        return ({ currentEvent });
      },

      handleFieldChange : state => (field, value) => {
        const currentEvent = R.assoc(field, value, state.currentEvent);
        return ({ currentEvent });
      },
    },
  ),
);

export default withRecompose(EditEvent);
