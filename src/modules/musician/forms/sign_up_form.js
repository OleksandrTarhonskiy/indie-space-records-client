import React          from 'react';
import TextField      from '@material-ui/core/TextField';
import styled         from 'styled-components';
import * as R         from 'ramda';
import {
  compose,
  withStateHandlers,
}                     from 'recompose';
import validator      from 'validator';

import GradientButton from '../../../layouts/gradient_button';

const MusicianSignUpForm = ({
  form: {
    name,
    email,
    password,
    confirmPassword,
  },
  handleChange,
  canSubmit,
}) => (
  <div>
    <MusicianSignUpForm.Headline>
      Sign up
    </MusicianSignUpForm.Headline>
    <form>
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
`;

const canSubmitForm = ({ name, email, password, confirmPassword }) => R.all(R.equals(true))([
  !R.isEmpty(name),
  validator.isEmail(email),
  validator.isLength(password, { min: 8 }),
  !R.isEmpty(confirmPassword),
  R.equals(password, confirmPassword),
]);

const withRecompose = compose(
  withStateHandlers(
    ({
      form      = {
        name            : '',
        email           : '',
        password        : '',
        confirmPassword : '',
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
    },
  ),
);

export default withRecompose(MusicianSignUpForm);
