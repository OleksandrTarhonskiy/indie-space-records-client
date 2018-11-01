import gql from 'graphql-tag';

export const createEventMutation = gql`
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

export const updateEventMutation = gql`
  mutation($eventId: Int!, $title: String!, $details: String!, $price: Float!, $date: String!, $country: String!, $region: String!, $address: String!) {
    updateEvent(eventId: $eventId, title: $title, details: $details, price: $price, date: $date, country: $country, region: $region, address: $address) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const deleteEventMutation = gql`
  mutation($eventId: Int!) {
    deleteEvent(eventId: $eventId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
