import React            from 'react';
import PropTypes        from 'prop-types';
import TextField        from '@material-ui/core/TextField';
import styled           from 'styled-components';
import * as R           from 'ramda';
import {
  CountryDropdown,
  RegionDropdown,
}                       from 'react-country-region-selector';
import {
  compose,
  withStateHandlers,
}                       from 'recompose';
import validator        from 'validator';
import Switch           from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import GradientButton   from '../../../layouts/gradient_button';

const CreateEvent = ({
  form: {
    title,
    details,
    price,
    country,
    region,
  },
  handleChange,
  handleReginChange,
  canSubmit,
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
        <CreateEvent.CountryDropdown
          value={country}
          onChange={handleReginChange.bind(null, 'country')}
        />
        <CreateEvent.RegionDropdown
          country={country}
          value={region}
          onChange={handleReginChange.bind(null, 'region')}
        />
      </CreateEvent.InputsWrapper>
      <GradientButton
        text={'Create'}
        disabled={!canSubmit}
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

const withRecompose = compose(
  withStateHandlers(
    ({
      form      = {
        title   : '',
        details : '',
        price   : '',
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

      handleReginChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({
          form,
          canSubmit     : canSubmitForm(form),
        });
      },
    },
  ),
);

export default withRecompose(CreateEvent);
