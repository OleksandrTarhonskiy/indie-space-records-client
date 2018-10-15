import React     from 'react';
import PropTypes from 'prop-types';
import moment    from 'moment'
import Table     from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow  from '@material-ui/core/TableRow';
import { Link }  from 'react-router-dom';

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
          <TableRow key={event.id}>
            <TableCell
              component="th"
              scope="row"
            >
              {event.title}
            </TableCell>
            <TableCell>{event.country}</TableCell>
            <TableCell>{event.region}</TableCell>
            <TableCell>{event.address}</TableCell>
            <TableCell>{moment(Date.parse(event.date)).format('DD/MM/YYYY h:mm A')}</TableCell>
            <TableCell numeric>{event.price}</TableCell>
            <TableCell numeric>
              <Link to={`/events/${event.id}`}>
                View details
              </Link>
            </TableCell>
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
