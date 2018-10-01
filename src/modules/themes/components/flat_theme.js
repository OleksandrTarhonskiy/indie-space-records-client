import React  from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {
  compose,
  withHandlers
}             from 'recompose';
import {
  gql,
  graphql
}             from 'react-apollo';

import Bg     from './bg.jpeg';

const FlatTheme = ({setTheme}) => (
  <div>
    <FlatTheme.SettingsHeader>
      <FlatTheme.Button onClick={setTheme}>
        Get this theme
      </FlatTheme.Button>
    </FlatTheme.SettingsHeader>
    <FlatTheme.Header>
      theme#1
    </FlatTheme.Header>
    <FlatTheme.Music>
      tracks and albums here
    </FlatTheme.Music>
  </div>
);

FlatTheme.SettingsHeader = styled.div`
  background      : #515151;
  display         : flex;
  flex-direction  : row;
  justify-content : end;
  padding         : 1%;
`;

FlatTheme.Button = styled(Button)`
  background : transparent;
  color      : #ffff !important;
  border     : 1px solid #eaedf5 !important;
  position   : absolute;
`;

FlatTheme.Header = styled.div`
  background        : url(${Bg});
  width             : 100%;
  background-repeat : no-repeat;
  background-size   : cover;
  padding           : 15% 0;
  display           : flex;
  justify-content   : center;
  color             : #ffff;
  font-size         : 40px;
  text-shadow       : 4px 3px 0px rgba(1, 1, 1, 1);
`;

FlatTheme.Music = styled.div`

`;

const createThemeMutation = gql`
  mutation($name: String!, $style: String!) {
    createTheme(name: $name,  style: $style) {
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
    setTheme : ({mutate}) => async () => {
      const response = await mutate({
        variables: {
          name  : 'flat theme',
          style : '{"backgroundColor" : "red", "color": "#ffff", "h1FontSize": "60", "h2FontSize": "40", "RegularFontSize": "40"}'
        },
      });
    },
  })
);

export default withRecompose(FlatTheme);
