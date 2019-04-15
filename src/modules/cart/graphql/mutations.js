import gql from 'graphql-tag';

export const createOrderMutation = gql`
  mutation(
    $products: String!,
    $firstName: String!,
    $lastName: String!,
    $phoneNumber: String!,
    $email: String!,
    $deliveryType: String!,
    $deliveryAddress: String!,
    $country: String!,
    $zipCode: String!,
    $city: String!
  ) {
    createOrder(products: $products, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, deliveryType: $deliveryType, deliveryAddress: $deliveryAddress, country: $country, zipCode: $zipCode, city: $city){
      ok
      errors {
        path
        message
      }
    }
  }
`;
