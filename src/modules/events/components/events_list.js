import React     from 'react';
import PropTypes from 'prop-types';
import Table     from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow  from '@material-ui/core/TableRow';

import EventRow  from './event_row';

const EventsList = ({events}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Started at</TableCell>
        <TableCell numeric>Price</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {events.map(event => {
        return (
          <EventRow
            key={event.id}
            event={event}
          />
        );
      })}
    </TableBody>
  </Table>
);

EventsList.propTypes = {
  events : PropTypes.array.isRequired,
};

export default EventsList;
