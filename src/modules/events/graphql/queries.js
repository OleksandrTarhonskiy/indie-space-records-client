import gql from 'graphql-tag';

export const allMyEventsQuery = gql`
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

export const viewEventQuery = gql`
  query viewEvent($eventId: Int!){
    viewEvent(eventId: $eventId) {
      id
      title
      details
      country
      region
      address
      date
      price
    }
  }
`;

export const viewEventsQuery = gql`
  query events($offset: Int!, $profileId: Int!){
    events(offset: $offset, profileId: $profileId) {
      id
      title
      details
      country
      region
      address
      date
      price
    }
  }
`;
