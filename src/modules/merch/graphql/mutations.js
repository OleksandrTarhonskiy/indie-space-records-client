import gql from 'graphql-tag';

export const createProductMutation = gql`
  mutation($type: String!, $title: String!, $desc: String!, $price: Float!, $deliveryType: String!) {
    createProduct(type: $type, title: $title, desc: $desc, price: $price, deliveryType: $deliveryType){
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const updateProductMutation = gql`
  mutation($productId: Int!, $type: String, $title: String, $price: Float, $inStock: Boolean) {
    updateProduct(productId: $productId, type: $type, title: $title, price: $price, inStock: $inStock){
      ok
      errors {
        path
        message
      }
    }
  }
`;
