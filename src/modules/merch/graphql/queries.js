import gql from 'graphql-tag';

export const allMyProductsQuery = gql`
  query MyProducts($offset: Int!, $searchQuery: String){
    MyProducts(offset: $offset, searchQuery: $searchQuery) {
      id
      type
      title
      price
      quantity
      url
      filetype
    }
  }
`;

export const viewProductQuery = gql`
  query viewProduct($productId: Int!){
    viewProduct(productId: $productId) {
      id
      type
      title
      price
      desc
      quantity
      url
    }
  }
`;

export const fetchProductsQuery = gql`
  query Products($offset: Int!, $profileId: Int!){
    Products(offset: $offset, profileId: $profileId) {
      id
      type
      title
      price
      desc
      quantity
      url
    }
  }
`;
