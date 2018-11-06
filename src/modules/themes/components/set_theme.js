import React                   from 'react';
import PropTypes               from 'prop-types';
import styled                  from 'styled-components';
import {
  compose,
  withHandlers,
  withStateHandlers,
}                              from 'recompose';
import { graphql }             from 'react-apollo';
import Alert                   from '../../../layouts/alert';
import Button                  from '@material-ui/core/Button';

import { createThemeMutation } from '../graphql/mutations';

const SetTheme = ({
  handleSetTheme,
  style,
  fonts,
  hasError,
  hideAlert,
  errorsList,
}) => (
  <SetTheme.SettingsHeader>
    <SetTheme.Button onClick={handleSetTheme.bind(null, style, fonts)}>
      Get this theme
    </SetTheme.Button>
    <Alert
      action="update"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </SetTheme.SettingsHeader>
);

SetTheme.SettingsHeader = styled.div`
  background      : #515151;
  display         : flex;
  flex-direction  : row;
  justify-content : end;
  padding         : 1%;
`;

SetTheme.Button = styled(Button)`
  background : transparent;
  color      : #ffff !important;
  border     : 1px solid #eaedf5 !important;
  position   : absolute;
`;

SetTheme.propTypes = {
  handleSetTheme : PropTypes.func.isRequired,
  style          : PropTypes.string.isRequired,
  fonts          : PropTypes.string.isRequired,
  hasError       : PropTypes.bool.isRequired,
  errorsList     : PropTypes.array.isRequired,
  hideAlert      : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(createThemeMutation),
  withStateHandlers(
    ({
      hasError   = false,
      errorsList = [],
    }) => ({ hasError, errorsList }),
    {
      showAlert          : () => () => ({ hasError: true }),
      hideAlert          : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    handleSetTheme : ({style, fonts, mutate, showAlert, errorsList }) => async () => {
      const response = await mutate({
        variables: {
          name  : 'flat theme',
          style : style,
          fonts : fonts,
        },
      });

      const { ok, errors } = response.data.createTheme;

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

export default withRecompose(SetTheme);
