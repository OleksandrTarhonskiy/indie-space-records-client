import gql from 'graphql-tag';

export const allMySongsQuery = gql`
  {
    allMySongs{
      id
      name
      url
      filetype
    }
  }
`;
