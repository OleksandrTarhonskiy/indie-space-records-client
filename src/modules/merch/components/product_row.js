import React     from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow  from '@material-ui/core/TableRow';

const ProductRow = ({
  product: {
    type,
    title,
    price,
    inStock,
  }
}) => (
  <TableRow>
    <TableCell>{type}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{price}</TableCell>
    <TableCell>{String(inStock)}</TableCell>
    <TableCell numeric>{0}</TableCell>
    <TableCell numeric>{0}</TableCell>
  </TableRow>
);

ProductRow.propTypes = {
  product : PropTypes.object.isRequired,
};

export default ProductRow;
