import gql from 'graphql-tag'

export default gql`
  {
    allMyEvents{
      id
      title
      country
      region
      address
      date
      price
    }
  }
`;
