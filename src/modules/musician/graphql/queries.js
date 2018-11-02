import gql from 'graphql-tag';

export const myProfilesQuery = gql`
  {
    myProfile{
      id
      name
      genres
      country
      region
      currency
    }
  }
`;

export const myProfileWithThemeQuery = gql`
  {
    myProfile{
      id
      name
      genres
      country
      region
      currency
      theme {
        style
        fonts
      }
    }
  }
`;

export const getCurrencyQuery = gql`
  {
    myProfile{
      currency
    }
  }
`;

export const hasProfileQuery = gql`
  {
    me{
      hasProfile
    }
  }
`;
