import React          from 'react';
import styled         from 'styled-components';
import {
  gql,
  graphql
}                     from 'react-apollo';
import { compose }    from 'recompose';
import { withRouter } from 'react-router';

import EditEvent      from '../forms/edit_event';

const EditEventPage = ({
  data: { viewEvent = {} },
}) => (
  <EditEventPage.PageWrapper >
    <EditEvent currentEvent={viewEvent} />
  </EditEventPage.PageWrapper >
);

EditEventPage.PageWrapper = styled.div`
  padding     : 5% 10%;
  dispay      : flex;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

const viewEventQuery = gql`
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

const withRecompose = compose(
  withRouter,
  graphql(viewEventQuery, {
    options: {
      variables: {
        eventId: 8
      }
    }
  })
);

export default withRecompose(EditEventPage);
