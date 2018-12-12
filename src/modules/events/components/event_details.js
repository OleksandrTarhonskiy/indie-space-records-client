import React              from 'react';
import PropTypes          from 'prop-types';
import moment             from 'moment';
import { graphql }        from 'react-apollo';
import { compose }        from 'recompose';
import styled             from 'styled-components';

import GradientButton     from '../../../layouts/gradient_button';
import { viewEventQuery } from '../graphql/queries';

const EventDetails = ({
  data: { viewEvent = {} },
  currency,
}) => (
  <div>
    <div>
      <EventDetails.Headline>
        {viewEvent.title}
      </EventDetails.Headline>
      <p>Price: {`${viewEvent.price} ${currency}`}</p>
      <p>Started : {moment(Date.parse(viewEvent.date)).format('DD/MM/YYYY h:mm A')}</p>
      <p>Country : {viewEvent.country}</p>
      <p>Region : {viewEvent.region}</p>
      <p>Address : {viewEvent.address}</p>
      <p>About:</p>
      <EventDetails.About>
        {viewEvent.details}
      </EventDetails.About>
      <GradientButton>
        View tikets
      </GradientButton>
    </div>
  </div>
);

EventDetails.About = styled.div`
  padding : 1%;
`;

EventDetails.Headline = styled.h1`
  text-align : center;
`;

EventDetails.propTypes = {
  id           : PropTypes.string.isRequired,
  data         : PropTypes.object.isRequired,
  currency     : PropTypes.string.isRequired,
};

const withRecompose = compose(
  graphql(viewEventQuery, {
    options: (ownProps) => ({
      variables: {
        eventId: ownProps.id
      }
    })
  }),
);

export default withRecompose(EventDetails);
