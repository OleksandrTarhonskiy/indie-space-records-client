import React  from 'react';
import styled from 'styled-components';
import {
  compose,
  withHandlers
}              from 'recompose';
import {
  gql,
  graphql
}              from 'react-apollo';
import Button  from '@material-ui/core/Button';

const SetTheme = ({
  setTheme,
  style,
  fonts,
}) => (
  <SetTheme.SettingsHeader>
    <SetTheme.Button onClick={setTheme}>
      Get this theme
    </SetTheme.Button>
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

const createThemeMutation = gql`
  mutation($name: String!, $style: String!, $fonts: String!) {
    createTheme(name: $name,  style: $style, fonts: $fonts) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const withRecompose = compose(
  graphql(createThemeMutation),
  withHandlers({
    setTheme : ({style, fonts, mutate}) => async () => {
      const response = await mutate({
        variables: {
          name  : 'flat theme',
          style : style,
          fonts : fonts,
        },
      });
    },
  })
);

export default withRecompose(SetTheme);