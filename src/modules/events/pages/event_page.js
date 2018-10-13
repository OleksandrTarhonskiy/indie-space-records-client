import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router'
import styled         from 'styled-components';

import EventDetails   from '../components/event_details'

const EventPage = ({
  match: {
    params: {
      id
    }
  },
}) => (
  <EventPage.PagaWrapper>
    <EventDetails id={id} />
  </EventPage.PagaWrapper>
);

EventPage.PagaWrapper = styled.div`
  padding     : 5%;
  dispay      : flex;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

export default withRouter(EventPage);
