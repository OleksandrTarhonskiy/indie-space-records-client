import React          from 'react';
import PropTypes      from 'prop-types';
import moment         from 'moment'
import {
  gql,
  graphql
}                     from 'react-apollo';
import { compose }    from 'recompose';
import styled         from 'styled-components';

import GradientButton from '../../../layouts/gradient_button';

const EventDetails = ({
  data: { viewEvent = {} },
  id,
}) => (
  <div>
    <EventDetails.Headline>
      {viewEvent.title}
    </EventDetails.Headline>
    <p>Price: {viewEvent.price}$</p>
    <p>Started : {moment(Date.parse(viewEvent.date)).format('DD/MM/YYYY h:mm A')}</p>
    <p>Country : {viewEvent.country}</p>
    <p>Region : {viewEvent.region}</p>
    <p>Address : {viewEvent.address}</p>
    <p>About:</p>
    <EventDetails.About>
      {viewEvent.details}
    </EventDetails.About>
    <GradientButton
      text={'View tikets'}
    />
  </div>
);

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

EventDetails.About = styled.div`
  padding : 1%;
`;

EventDetails.Headline = styled.h1`
  text-align : center;
`;

EventDetails.propTypes = {
  id   : PropTypes.number.isRequired,
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(viewEventQuery, {
    options: (ownProps) => ({
      variables: {
        eventId: ownProps.id
      }
    })
  })
);

export default withRecompose(EventDetails);
