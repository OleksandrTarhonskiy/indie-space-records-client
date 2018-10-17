import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import {
  gql,
  graphql
}                     from 'react-apollo';
import { compose }    from 'recompose';

import EditEventForm  from '../forms/edit_event_form';

const EditEvent = ({
  id,
  data: { viewEvent = {} },
}) => (
  <EditEvent.PageWrapper>
    <EditEventForm currentEvent={viewEvent} />
  </EditEvent.PageWrapper>
);

EditEvent.PageWrapper = styled.div`
  padding     : 5% 10%;
  dispay      : flex;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

EditEvent.propTypes = {
  id   : PropTypes.number.isRequired,
  data : PropTypes.object.isRequired,
};

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
  graphql(viewEventQuery, {
    options: (ownProps) => ({
      variables: {
        eventId: ownProps.id,
      }
    })
  })
);

export default withRecompose(EditEvent);
