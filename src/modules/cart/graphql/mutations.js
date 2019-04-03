import gql from 'graphql-tag';

export const createOrderMutation = gql`
  mutation($products: String!, $firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $deliveryType: String!) {
    createOrder(products: $products, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, deliveryType: $deliveryType){
      ok
      errors {
        path
        message
      }
    }
  }
`;
