import gql from 'graphql-tag';

export const allMyProductsQuery = gql`
  query allMyProducts($searchQuery: String){
    allMyProducts(searchQuery: $searchQuery) {
      id
      type
      title
      price
      inStock
      url
      filetype
    }
  }
`;
