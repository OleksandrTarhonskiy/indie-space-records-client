import React              from 'react';
import styled             from 'styled-components';
import Button             from '@material-ui/core/Button';
import {
  compose,
  withHandlers
}                          from 'recompose';
import {
  gql,
  graphql
}                          from 'react-apollo';

import {
  firstThemeStyle,
  firstThemeFont
}                          from '../models/themes_styles'

const FlatTheme = ({setTheme}) => (
  <div>
    <FlatTheme.SettingsHeader>
      <FlatTheme.Button onClick={setTheme}>
        Get this theme
      </FlatTheme.Button>
    </FlatTheme.SettingsHeader>
    <FlatTheme.ThemeWrapper>
      <FlatTheme.Navigation>
        <FlatTheme.NavItems>
          <FlatTheme.NavItem>
            <FlatTheme.Link href="">Music</FlatTheme.Link>
          </FlatTheme.NavItem>
          <FlatTheme.NavItem>
            <FlatTheme.Link href="">Merch</FlatTheme.Link>
          </FlatTheme.NavItem>
          <FlatTheme.NavItem>
            <FlatTheme.Link href="">About</FlatTheme.Link>
          </FlatTheme.NavItem>
        </FlatTheme.NavItems>
      </FlatTheme.Navigation>
      <FlatTheme.Header>
        theme#1
      </FlatTheme.Header>
      <FlatTheme.FirstSection>
        tracks and albums here
      </FlatTheme.FirstSection>
      <FlatTheme.SecondSection>
        tracks and albums here
      </FlatTheme.SecondSection>
      <FlatTheme.ThirdSection>
        tracks and albums here
      </FlatTheme.ThirdSection>
    </FlatTheme.ThemeWrapper>
  </div>
);

FlatTheme.SettingsHeader = styled.div`
  background      : #515151;
  display         : flex;
  flex-direction  : row;
  justify-content : end;
  padding         : 1%;
`;

FlatTheme.ThemeWrapper = styled.div`
  color       : #ffff;
  font-family : 'Roboto', sans-serif;
`;

FlatTheme.Navigation = styled.div`
  position   : absolute;
  width      : 100%;
  text-align : center;
`;

FlatTheme.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

FlatTheme.Link = styled.a`
  && {
    color           : #ffff;
    text-decoration : none;
    font-weight     : 600;

    &:hover {
      color : #ba3341;
    }
  }
`;

FlatTheme.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

FlatTheme.FirstSection = styled.div`
  min-height : 400px;
  background : #222224;
  padding    : 2%;
`;

FlatTheme.ThirdSection = styled.div`
  min-height : 400px;
  background : #222224;
  padding    : 2%;
`;

FlatTheme.Button = styled(Button)`
  background : transparent;
  color      : #ffff !important;
  border     : 1px solid #eaedf5 !important;
  position   : absolute;
`;

FlatTheme.Header = styled.div`
  width             : 100%;
  background        : linear-gradient(to right,#413b53 0%,#e84d75 100%);
  padding           : 15% 0;
  display           : flex;
  justify-content   : center;
  color             : #ffff;
  font-size         : 40px;
  text-shadow       : 4px 3px 0px rgba(1, 1, 1, 1);
`;

FlatTheme.SecondSection = styled.div`
  min-height : 400px;
  background : #ba3341;
  padding    : 2%;
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
    setTheme : ({mutate}) => async () => {
      const response = await mutate({
        variables: {
          name  : 'flat theme',
          style : firstThemeStyle,
          fonts : firstThemeFont,
        },
      });
    },
  })
);

export default withRecompose(FlatTheme);
