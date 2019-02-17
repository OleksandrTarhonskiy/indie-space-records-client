import gql from 'graphql-tag';

export const createProductMutation = gql`
  mutation($type: String!, $title: String!, $desc: String!, $price: Float!, $deliveryType: String!, $quantity: Int!, $file: File!) {
    createProduct(type: $type, title: $title, desc: $desc, price: $price, deliveryType: $deliveryType, quantity: $quantity, file: $file){
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const updateProductMutation = gql`
  mutation($productId: Int!, $type: String, $title: String, $price: Float, $quantity: Int, $file: File) {
    updateProduct(productId: $productId, type: $type, title: $title, price: $price, quantity: $quantity, file: $file){
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const deleteProductMutation = gql`
  mutation($productId: Int!) {
    deleteProduct(productId: $productId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
