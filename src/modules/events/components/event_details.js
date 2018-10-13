import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router'
import {
  gql,
  graphql
}                     from 'react-apollo';
import { compose }    from 'recompose';
import styled         from 'styled-components';
import Button         from '@material-ui/core/Button';

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
    <p>Started : {viewEvent.date}</p>
    <p>Country : {viewEvent.country}</p>
    <p>Region : {viewEvent.region}</p>
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
