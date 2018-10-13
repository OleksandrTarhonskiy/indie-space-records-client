import React     from 'react';
import PropTypes from 'prop-types';
import Table     from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow  from '@material-ui/core/TableRow';

const EventsList = ({events}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Started at</TableCell>
        <TableCell numeric>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {events.map(event => {
        return (
          <TableRow key={event.id}>
            <TableCell
              component="th"
              scope="row"
            >
              {event.title}
            </TableCell>
            <TableCell>{event.country}</TableCell>
            <TableCell>{event.region}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell numeric>{event.price}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

EventsList.propTypes = {
  events : PropTypes.array.isRequired,
};

export default EventsList;
