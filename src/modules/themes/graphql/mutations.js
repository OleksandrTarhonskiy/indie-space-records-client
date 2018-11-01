import gql from 'graphql-tag';

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
