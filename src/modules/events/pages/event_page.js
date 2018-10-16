import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router';
import styled         from 'styled-components';

import EventDetails   from '../components/event_details';

const EventPage = ({
  match: {
    params: {
      id
    }
  },
}) => (
  <EventPage.PageWrapper>
    <EventDetails id={id} />
  </EventPage.PageWrapper>
);

EventPage.PageWrapper = styled.div`
  padding     : 5%;
  dispay      : flex;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

EventPage.propTypes = {
  match : PropTypes.object.isRequired,
};

export default withRouter(EventPage);
