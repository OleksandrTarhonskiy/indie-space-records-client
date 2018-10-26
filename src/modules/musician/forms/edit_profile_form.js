import React            from 'react';
import ChipInput        from 'material-ui-chip-input';
import TextField        from '@material-ui/core/TextField';
import InputLabel       from '@material-ui/core/InputLabel';
import FormControl      from '@material-ui/core/FormControl';
import Input            from '@material-ui/core/Input';
import Select           from '@material-ui/core/Select';
import MenuItem         from '@material-ui/core/MenuItem';
import {
  CountryDropdown,
  RegionDropdown
}                       from 'react-country-region-selector';
import * as R           from 'ramda';
import PropTypes        from 'prop-types';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                       from 'recompose';
import { gql, graphql } from 'react-apollo';
import styled           from 'styled-components';

import GradientButton   from '../../../layouts/gradient_button';
import Alert            from '../../../layouts/alert';
import { currencies }   from '../models/currencies';

const EditProfileForm = ({
  form: {
    name,
    genres,
    country,
    region,
    currency,
  },
  addChip,
  deleteChip,
  submit,
  handleChange,
  hasError,
  hideAlert,
  errorsList,
  handleReginChange,
  canSubmit,
}) => (
  <form>
    <EditProfileForm.InputsWrapper>
      <EditProfileForm.Headline>
        Edit information about your band
      </EditProfileForm.Headline>
      <TextField
        id="name"
        name="name"
        label="Name"
        type="text"
        margin="normal"
        value={name}
        onChange={handleChange}
        fullWidth
      />
      <ChipInput
        label="Genres"
        placeholder="Type and press enter to add..."
        value={genres || []}
        onAdd={addChip.bind(null, 'genres')}
        onDelete={deleteChip.bind(null, 'genres')}
      />
      <EditProfileForm.CountryDropdown
        value={country}
        onChange={handleReginChange.bind(null, 'country')}
      />
      <EditProfileForm.RegionDropdown
        country={country}
        value={region}
        onChange={handleReginChange.bind(null, 'region')}
      />
    </EditProfileForm.InputsWrapper>
    <EditProfileForm.SelectWrapper>
      <InputLabel
        ref={ref => {
          this.InputLabelRef = ref;
        }}
        htmlFor="currency"
      >
        Currency
      </InputLabel>
      <Select
        value={currency}
        onChange={handleChange}
        input={
          <Input
            name="currency"
            id="currency"
          />
        }
      >
        { currencies.map((c, index) => <MenuItem key={index} value={c.code}>{c.name}</MenuItem>) }
      </Select>
    </EditProfileForm.SelectWrapper>
    <br />
    <GradientButton
      text={'Update'}
      disabled={!canSubmit}
      onClick={submit}
    />
    <Alert
      action="update"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </form>
);

EditProfileForm.InputsWrapper = styled.div`
  display        : flex;
  flex-direction : column;
`;

EditProfileForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

EditProfileForm.CountryDropdown = styled(CountryDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

EditProfileForm.RegionDropdown = styled(RegionDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

EditProfileForm.SelectWrapper = styled(FormControl)`
  width : 100%
`;

EditProfileForm.propTypes = {
  form              : PropTypes.object.isRequired,
  submit            : PropTypes.func.isRequired,
  addChip           : PropTypes.func.isRequired,
  deleteChip        : PropTypes.func.isRequired,
  handleChange      : PropTypes.func.isRequired,
  hasError          : PropTypes.bool.isRequired,
  errorsList        : PropTypes.array.isRequired,
  hideAlert         : PropTypes.func.isRequired,
  handleReginChange : PropTypes.func.isRequired,
  canSubmit         : PropTypes.bool.isRequired,
};

const canSubmitForm = ({ name, genres, country, region }) => R.all(R.equals(true))([
  !R.isEmpty(name),
  !R.isEmpty(genres),
  !R.isEmpty(country),
  !R.isEmpty(region),
]);

const updateProfileMutation = gql`
  mutation($profileId: Int!, $name: String!, $genres: String!, $country: String!, $region: String!, $currency: String!) {
    updateProfile(profileId: $profileId, name: $name, genres: $genres, country: $country, region: $region, currency: $currency) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const withRecompose = compose(
  graphql(updateProfileMutation),
  withStateHandlers(
    ({
      form      = {
        name     : '',
        genres   : [],
        country  : '',
        region   : '',
        currency : '',
      },
      canSubmit  = true,
      errorsList = [],
      hasError   = false,
    }) => ({ form, errorsList, hasError, canSubmit }),
    {
      handleChange      : state => ({ target }) => {
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
          canSubmit : canSubmitForm(form),
        });
      },
      addChip           : state => (field, value) => {
        const fieldLens = R.lensProp(field);
        const form = R.set(fieldLens, R.compose(R.append(value), R.view(fieldLens))(state.form), state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },
      deleteChip        : state => (field, value, ind) => {
        const form = R.dissocPath([field, ind], (state.form));
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },
      showAlert          : () => () => ({ hasError: true }),
      hideAlert          : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    submit : ({
      form : {
        id,
        name,
        genres,
        country,
        region,
        currency,
      },
      mutate,
      errorsList,
      showAlert,
    }) => async () => {
      const genresString = genres.toString();
      const response = await mutate({
        variables: {
          profileId : id,
          name      : name,
          genres    : genresString,
          country   : country,
          region    : region,
          currency  : currency,
        }
      });

      const { ok, errors } = response.data.updateProfile;

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

export default withRecompose(EditProfileForm);
