import React      from 'react';
import PropTypes  from 'prop-types';
import Table      from '@material-ui/core/Table';
import TableBody  from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import TableRow   from '@material-ui/core/TableRow';
import Paper      from '@material-ui/core/Paper';
import styled     from 'styled-components';

import ProductRow from './product_row';

const ProductsTable = ({ products }) => (
  <ProductsTable.Container>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Orders</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(product => {
          return (
            <ProductRow
              key={product.id}
              product={product}
            />
          );
        })}
      </TableBody>
    </Table>
  </ProductsTable.Container>
);

ProductsTable.Container = styled(Paper)`
  margin  : 1%;
  padding : 2%;
`;

ProductsTable.propTypes = {
  products : PropTypes.array.isRequired,
};

export default ProductsTable;
