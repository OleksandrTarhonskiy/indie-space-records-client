import React            from 'react';
import PropTypes        from 'prop-types';
import TextField        from '@material-ui/core/TextField';
import styled           from 'styled-components';
import * as R           from 'ramda';
import {
  compose,
  withStateHandlers,
}                       from 'recompose';
import validator        from 'validator';
import Switch           from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import GradientButton   from '../../../layouts/gradient_button';

const FanSignUpForm = ({
  form: {
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
    <FanSignUpForm.Headline>
      Sign Up for an Fan Account
    </FanSignUpForm.Headline>
    <form>
      <TextField
        id="name"
        name="name"
        label="Username"
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
      <FormControlLabel
        control={
          <Switch
            color="primary"
            active={license.toString()}
            onChange={handleSwitchChange}
          />
        }
        label="I have read and agree to the Terms of Use."
      />
      <br />
      <GradientButton
        disabled={!canSubmit}
      >
        Sign up
      </GradientButton>
    </form>
  </div>
);

FanSignUpForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

FanSignUpForm.propTypes = {
  form               : PropTypes.object.isRequired,
  canSubmit          : PropTypes.bool.isRequired,
  handleChange       : PropTypes.func.isRequired,
  handleSwitchChange : PropTypes.func.isRequired,
};

const canSubmitForm = ({ name, email, password, confirmPassword, license }) => R.all(R.equals(true))([
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

export default withRecompose(FanSignUpForm);
