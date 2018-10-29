import gql from 'graphql-tag'

export default gql`
  mutation($title: String!, $details: String!, $price: Float!, $date: String!, $country: String!, $region: String!, $address: String!) {
    createEvent(title: $title, details: $details, price: $price, date: $date, country: $country, region: $region, address: $address) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
