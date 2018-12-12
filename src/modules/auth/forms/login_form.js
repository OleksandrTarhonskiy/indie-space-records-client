import React             from 'react';
import PropTypes         from 'prop-types';
import TextField         from '@material-ui/core/TextField';
import Snackbar          from '@material-ui/core/Snackbar';
import SnackbarContent   from '@material-ui/core/SnackbarContent';
import WarningIcon       from '@material-ui/icons/Warning';
import Typography        from '@material-ui/core/Typography';
import styled            from 'styled-components';
import * as R            from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                        from 'recompose';
import validator         from 'validator';
import { Link }          from 'react-router-dom';
import { graphql }       from 'react-apollo';
import { withRouter }    from 'react-router-dom';

import GradientButton    from '../../../layouts/gradient_button';
import { loginMutation } from '../graphql/mutations';

const LoginForm = ({
  form: {
    email,
    password,
  },
  handleChange,
  canSubmit,
  submit,
  errorsList,
  hasError,
  hideError,
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
        disabled={!canSubmit}
        onClick={submit}
      >
        Sign in
      </GradientButton>
    </form>
    <LoginForm.CaptionWrapper>
      <Typography variant="caption" gutterBottom align="center">
        Don’t have an account? Sign up as a
        <Link to="/musician/sign_up">musician</Link> or <Link to="/">fan</Link>
      </Typography>
    </LoginForm.CaptionWrapper>
    <Snackbar
      open={hasError}
      autoHideDuration={2000}
      onClose={hideError}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <LoginForm.Alert
        message={
          errorsList.length > 0 ?
            errorsList.map((err, index) => <p key={index}><WarningIcon /> {err}</p>)
            :
            null
        }
      />
    </Snackbar>
  </div>
);

LoginForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

LoginForm.Alert = styled(SnackbarContent)`
  background-color : #ee3c25 !important;
  font-family      : 'Roboto', sans-serif;
`;


LoginForm.CaptionWrapper = styled.div`
  margin-top : 20%;
`;

LoginForm.propTypes = {
  form         : PropTypes.object.isRequired,
  canSubmit    : PropTypes.bool.isRequired,
  handleChange : PropTypes.func.isRequired,
  hasError     : PropTypes.bool.isRequired,
  errorsList   : PropTypes.array.isRequired,
  hideError    : PropTypes.func.isRequired,
  submit       : PropTypes.func.isRequired,
};

const canSubmitForm = ({ email, password }) => R.all(R.equals(true))([
  validator.isEmail(email),
  !R.isEmpty(email),
  !R.isEmpty(password),
]);

const withRecompose = compose(
  withRouter,
  graphql(loginMutation),
  withStateHandlers(
    ({
      form       = {
        email    : '',
        password : '',
      },
      canSubmit  = false,
      hasError   = false,
      errorsList = [],
    }) => ({ form, canSubmit, errorsList, hasError }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },
      showError    : () => () => ({ hasError: true }),
      hideError    : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    submit : ({form, mutate, errorsList, showError, history}) => async () => {
      const response = await mutate({
        variables: form,
      });

      const { ok, token, refreshToken , errors} = response.data.login;

      if (ok) {
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        history.push('/musician/home');
      } else {
        let messageText = null;
        errors.map((msg) => messageText = msg.message);

        if (!errorsList.includes(messageText)) {
          errorsList.push(messageText);
        }
        showError();
        errorsList.pop();
      }
    },
  })
);

export default withRecompose(LoginForm);
