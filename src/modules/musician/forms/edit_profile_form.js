import React            from 'react';
import ChipInput        from 'material-ui-chip-input';
import TextField        from '@material-ui/core/TextField';
import Snackbar         from '@material-ui/core/Snackbar';
import SnackbarContent  from '@material-ui/core/SnackbarContent';
import WarningIcon      from '@material-ui/icons/Warning';
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
import { withRouter }   from 'react-router-dom';

import GradientButton   from '../../../layouts/gradient_button';
import Alert            from '../../../layouts/alert';

const EditProfileForm = ({
  form: {
    name,
    genres,
    country,
    region,
  },
  addChip,
  deleteChip,
  submit,
  handleChange,
  hasError,
  hideAlert,
  errorsList,
  handleReginChange,
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
    <br />
    <GradientButton
      text={'Update'}
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

EditProfileForm.Alert = styled(SnackbarContent)`
  background-color : #ee3c25 !important;
  font-family      : 'Roboto', sans-serif;
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

EditProfileForm.propTypes = {
  form              : PropTypes.object.isRequired,
  canSubmit         : PropTypes.bool.isRequired,
  submit            : PropTypes.func.isRequired,
  addChip           : PropTypes.func.isRequired,
  deleteChip        : PropTypes.func.isRequired,
  handleChange      : PropTypes.func.isRequired,
  hasError          : PropTypes.bool.isRequired,
  errorsList        : PropTypes.array.isRequired,
  hideError         : PropTypes.func.isRequired,
  handleReginChange : PropTypes.func.isRequired,
};

const updateProfileMutation = gql`
  mutation($profileId: Int!, $name: String!, $genres: String!, $country: String!, $region: String!) {
    updateProfile(profileId: $profileId, name: $name, genres: $genres, country: $country, region: $region) {
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
  withRouter,
  withStateHandlers(
    ({
      form      = {
        name    : '',
        genres  : [],
        country : '',
        region  : '',
      },
      errorsList = [],
      hasError   = false,
    }) => ({ form, errorsList, hasError }),
    {
      handleChange      : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },
      handleReginChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({ form });
      },
      addChip           : state => (field, value) => {
        const fieldLens = R.lensProp(field);
        const form = R.set(fieldLens, R.compose(R.append(value), R.view(fieldLens))(state.form), state.form);
        return ({ form });
      },
      deleteChip        : state => (field, value, ind) => {
        const form = R.dissocPath([field, ind], (state.form));
        return ({ form });
      },
      showAlert          : () => () => ({ hasError: true }),
      hideAlert          : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    submit : ({
      form : {
        name,
        genres,
        country,
        region,
      },
      mutate,
      errorsList,
      showAlert,
      history,
    }) => async () => {
      const genresString = genres.toString();
      const response = await mutate({
        variables: {profileId : 1, name: name, genres: genresString, country: country, region: region}
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
