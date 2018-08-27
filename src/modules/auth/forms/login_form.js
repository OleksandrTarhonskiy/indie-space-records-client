import React          from 'react';
import PropTypes      from 'prop-types';
import TextField      from '@material-ui/core/TextField';
import Typography     from '@material-ui/core/Typography';
import styled         from 'styled-components';
import * as R         from 'ramda';
import {
  compose,
  withStateHandlers,
}                     from 'recompose';
import validator      from 'validator';
import { Link }       from 'react-router-dom';

import GradientButton from '../../../layouts/gradient_button';

const LoginForm = ({
  form: {
    email,
    password,
  },
  handleChange,
  canSubmit,
}) => (
  <div>
    <LoginForm.Headline>
      Log in
    </LoginForm.Headline>
    <form>
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
      <br />
      <GradientButton
        text={'Sign up'}
        disabled={!canSubmit}
      />
    </form>
    <LoginForm.CaptionWrapper>
      <Typography variant="caption" gutterBottom align="center">
        Don’t have an account? Sign up as a
        <Link to="/musician/sign_up">musician</Link> or <Link to="/">fan</Link>
      </Typography>
    </LoginForm.CaptionWrapper>
  </div>
);

LoginForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

LoginForm.CaptionWrapper = styled.div`
  margin-top : 20%;
`;

LoginForm.propTypes = {
  form               : PropTypes.object.isRequired,
  canSubmit          : PropTypes.bool.isRequired,
  handleChange       : PropTypes.func.isRequired,
};

const canSubmitForm = ({ email, password }) => R.all(R.equals(true))([
  validator.isEmail(email),
  !R.isEmpty(email),
  !R.isEmpty(password),
]);

const withRecompose = compose(
  withStateHandlers(
    ({
      form      = {
        email           : '',
        password        : '',
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

export default withRecompose(LoginForm);
