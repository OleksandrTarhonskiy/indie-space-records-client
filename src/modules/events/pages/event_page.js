import React                from 'react';
import { withRouter }       from 'react-router';
import PropTypes            from 'prop-types';
import styled               from 'styled-components';
import { graphql }          from 'react-apollo';
import { compose }          from 'recompose';

import EventDetails         from '../components/event_details';
import { getCurrencyQuery } from '../../musician/graphql/queries';

const EventPage = ({
  match: {
    params: {
      id
    }
  },
  data: {
    myProfile = {},
  },
}) => (
  <EventPage.PageWrapper>
    <EventDetails
      id={id}
      currency={myProfile.currency}
    />
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
  data  : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(getCurrencyQuery),
  withRouter,
);

export default withRecompose(EventPage);
