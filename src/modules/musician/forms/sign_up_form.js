import React          from 'react';
import PropTypes      from 'prop-types';
import TextField      from '@material-ui/core/TextField';
import styled         from 'styled-components';
import * as R         from 'ramda';
import {
  compose,
  withStateHandlers,
}                     from 'recompose';
import validator      from 'validator';
import Switch         from '@material-ui/core/Switch';

import GradientButton from '../../../layouts/gradient_button';

const MusicianSignUpForm = ({
  form: {
    bandName,
    name,
    email,
    password,
    confirmPassword,
    license,
  },
  handleChange,
  canSubmit,
  handleSwitchChange,
}) => (
  <div>
    <MusicianSignUpForm.Headline>
      Sign Up for an Artist Account
    </MusicianSignUpForm.Headline>
    <form>
      <TextField
        id="bandName"
        name="bandName"
        label="Band Name"
        margin="normal"
        value={bandName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="name"
        name="name"
        label="Name"
        margin="normal"
        value={name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        margin="normal"
        value={email}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        margin="normal"
        value={confirmPassword}
        onChange={handleChange}
        fullWidth
      />
      <MusicianSignUpForm.LicenseWrapper>
        <Switch
          color="primary"
          active={license.toString()}
          onChange={handleSwitchChange}
        />
        <p>I have read and agree to the Terms of Use. </p>
      </MusicianSignUpForm.LicenseWrapper>
      <GradientButton
        text={'Sign up'}
        disabled={!canSubmit}
      />
    </form>
  </div>
);

MusicianSignUpForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

MusicianSignUpForm.LicenseWrapper = styled.div`
  display     : flex;
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  font-weight : 100;
`;

MusicianSignUpForm.propTypes = {
  form               : PropTypes.object.isRequired,
  canSubmit          : PropTypes.bool.isRequired,
  handleChange       : PropTypes.func.isRequired,
  handleSwitchChange : PropTypes.func.isRequired,
};

const canSubmitForm = ({ bandName, name, email, password, confirmPassword, license }) => R.all(R.equals(true))([
  !R.isEmpty(bandName),
  !R.isEmpty(name),
  validator.isEmail(email),
  validator.isLength(password, { min: 8 }),
  !R.isEmpty(confirmPassword),
  R.equals(password, confirmPassword),
  R.equals(license, true),
]);

const withRecompose = compose(
  withStateHandlers(
    ({
      form      = {
        bandName        : '',
        name            : '',
        email           : '',
        password        : '',
        confirmPassword : '',
        license         : false,
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
      handleSwitchChange : state => () => {
        const form = R.assoc('license', !state.form.license, state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },
    },
  ),
);

export default withRecompose(MusicianSignUpForm);
