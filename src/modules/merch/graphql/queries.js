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

export const viewProductQuery = gql`
  query viewProduct($productId: Int!){
    viewProduct(productId: $productId) {
      id
      type
      title
      price
      inStock
      url
    }
  }
`;
