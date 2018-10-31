import React          from 'react';
import PropTypes      from 'prop-types';
import moment         from 'moment';
import * as R         from 'ramda';
import {
  gql,
  graphql
}                     from 'react-apollo';
import {
  compose,
  withStateHandlers,
}                     from 'recompose';
import styled         from 'styled-components';

import GradientButton from '../../../layouts/gradient_button';
import EditEvent      from './edit_event';

const EventDetails = ({
  data: { viewEvent = {} },
  id,
  editing,
  setToEditing,
  setToDetails,
  currency,
}) => (
  <div>
    { editing?
      <EditEvent id={id} />
      :
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
        <GradientButton
          text={'View tikets'}
        />
      </div>
    }
    <GradientButton
      text={editing? 'View event' : 'Edit event'}
      onClick={editing? setToDetails : setToEditing}
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
  id           : PropTypes.string.isRequired,
  data         : PropTypes.object.isRequired,
  editing      : PropTypes.bool.isRequired,
  setToEditing : PropTypes.func.isRequired,
  setToDetails : PropTypes.func.isRequired,
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
  withStateHandlers(
    ({
      editing = false,
    }) => ({ editing }),
    {
      setToEditing : state => () => R.assoc('editing', true, state),
      setToDetails : state => () => R.assoc('editing', false, state),
    },
  ),
);

export default withRecompose(EventDetails);
