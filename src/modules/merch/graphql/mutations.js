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
