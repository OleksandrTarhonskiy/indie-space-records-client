import React     from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow  from '@material-ui/core/TableRow';
import { Link }  from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import styled    from 'styled-components';
import moment    from 'moment';
import {
  gql,
  graphql
}                from 'react-apollo';
import {
  compose,
  withHandlers,
}                from 'recompose';

const EventRow = ({
  event: {
    id,
    title,
    country,
    region,
    address,
    date,
    price,
  },
  deleteEvent,
}) => (
  <TableRow>
    <TableCell
      component="th"
      scope="row"
    >
      {title}
    </TableCell>
    <TableCell>{country}</TableCell>
    <TableCell>{region}</TableCell>
    <TableCell>{address}</TableCell>
    <TableCell>{moment(Date.parse(date)).format('DD/MM/YYYY h:mm A')}</TableCell>
    <TableCell numeric>{price}</TableCell>
    <TableCell>
      <EventRow.ActionsWrapper>
        <Link to={`/events/${id}`}>
          View details
        </Link>
        <EventRow.DeleteIconWrapper>
          <ClearIcon Click={deleteEvent} />
        </EventRow.DeleteIconWrapper>
      </EventRow.ActionsWrapper>
    </TableCell>
  </TableRow>
);

EventRow.ActionsWrapper = styled.div`
  display        : flex;
  flex-direction : row;
`;

EventRow.DeleteIconWrapper = styled.div`
  cursor : pointer;
`;

const deleteEventMutation = gql`
  mutation($eventId: Int!) {
    deleteEvent(eventId: $eventId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const withRecompose = compose(
  graphql(deleteEventMutation),
  withHandlers({
    deleteEvent : ({ event, mutate }) => async () => {
      const response = await mutate({
        variables: { eventId : event.id}
      });
    },
  })
);

export default withRecompose(EventRow);
