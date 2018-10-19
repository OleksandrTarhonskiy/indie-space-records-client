import React          from 'react';
import PropTypes      from 'prop-types';
import TableCell      from '@material-ui/core/TableCell';
import IconButton     from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TableRow       from '@material-ui/core/TableRow';
import { Link }       from 'react-router-dom';
import ClearIcon      from '@material-ui/icons/Clear';
import styled         from 'styled-components';
import moment         from 'moment';
import {
  gql,
  graphql
}                     from 'react-apollo';
import {
  compose,
  withHandlers,
  withStateHandlers,
}                     from 'recompose';
import Alert          from '../../../layouts/alert';

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
  hasError,
  errorsList,
  hideAlert,
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
        <IconButton component={Link} to={`/events/${id}`}>
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={deleteEvent}>
          <ClearIcon />
        </IconButton>
      </EventRow.ActionsWrapper>
    </TableCell>
    <Alert
      action="delete"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </TableRow>
);

EventRow.ActionsWrapper = styled.div`
  display        : flex;
  flex-direction : row;
`;

EventRow.propTypes = {
  deleteEvent : PropTypes.func.isRequired,
  event       : PropTypes.object.isRequired,
};

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
  withStateHandlers(
    ({
      hasError   = false,
      errorsList = [],
    }) => ({ hasError, errorsList }),
    {
      showAlert         : () => () => ({ hasError: true }),
      hideAlert         : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    deleteEvent : ({ event, mutate, showAlert, errorsList }) => async () => {
      const response = await mutate({
        variables: { eventId : event.id}
      });

      const { ok, errors } = response.data.deleteEvent;

      if (ok) {
        showAlert();
      } else {
        let messageText = null;
        errors.map((msg) => messageText = msg.message);

        if (!errorsList.includes(messageText)) {
          errorsList.push(messageText);
        }
        showAlert();
        errorsList.pop();
      }
    },
  })
);

export default withRecompose(EventRow);
