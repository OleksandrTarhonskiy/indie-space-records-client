import gql from 'graphql-tag';

export const allMyProductsQuery = gql`
  {
    allMyProducts{
      id
      type
      title
      price
    }
  }
`;
