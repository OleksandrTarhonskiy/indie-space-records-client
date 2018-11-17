import React         from 'react';
import PropTypes     from 'prop-types';
import styled        from 'styled-components';
import TableCell     from '@material-ui/core/TableCell';
import TableRow      from '@material-ui/core/TableRow';
import TextField     from '@material-ui/core/TextField';
import IconButton    from '@material-ui/core/IconButton';
import CloseIcon     from '@material-ui/icons/Close';
import * as R        from 'ramda';
import {
  compose,
  withStateHandlers,
}                    from 'recompose';

const ProductRow = ({
  product: {
    type,
    title,
    price,
    inStock,
  },
  toggleEdit,
  edit,
}) => (
  <TableRow>
    {
      edit.type ?
      <ProductRow.TableCell>
        <TextField
          name="type"
          label="type"
          margin="normal"
          value={type}
          fullWidth
        />
        <ProductRow.IconButton onClick={toggleEdit.bind(null, 'type', false)}>
          <CloseIcon />
        </ProductRow.IconButton>
      </ProductRow.TableCell>
      :
      <ProductRow.TableCell onClick={toggleEdit.bind(null, 'type', true)}>
        {type}
      </ProductRow.TableCell>
    }
    {
      edit.title ?
      <ProductRow.TableCell>
        <TextField
          name="title"
          label="Title"
          margin="normal"
          value={title}
          fullWidth
        />
        <ProductRow.IconButton onClick={toggleEdit.bind(null, 'title', false)}>
          <CloseIcon />
        </ProductRow.IconButton>
      </ProductRow.TableCell>
      :
      <ProductRow.TableCell onClick={toggleEdit.bind(null, 'title', true)}>
        {title}
      </ProductRow.TableCell>
    }
    {
      edit.price ?
      <ProductRow.TableCell>
        <TextField
          name="price"
          label="price"
          margin="normal"
          value={price}
          fullWidth
        />
        <ProductRow.IconButton onClick={toggleEdit.bind(null, 'price', false)}>
          <CloseIcon />
        </ProductRow.IconButton>
      </ProductRow.TableCell>
      :
      <ProductRow.TableCell onClick={toggleEdit.bind(null, 'price', true)}>
        {price}
      </ProductRow.TableCell>
    }
    {
      edit.inStock ?
      <ProductRow.TableCell>
        <TextField
          name="inStock"
          label="in stock"
          margin="normal"
          value={inStock}
          fullWidth
        />
        <ProductRow.IconButton onClick={toggleEdit.bind(null, 'inStock', false)}>
          <CloseIcon />
        </ProductRow.IconButton>
      </ProductRow.TableCell>
      :
      <ProductRow.TableCell onClick={toggleEdit.bind(null, 'inStock', true)}>
        {String(inStock)}
      </ProductRow.TableCell>
    }
    <ProductRow.TableCell numeric>{0}</ProductRow.TableCell>
    <ProductRow.TableCell numeric>{0}</ProductRow.TableCell>
  </TableRow>
);

ProductRow.propTypes = {
  product : PropTypes.object.isRequired,
};

ProductRow.TableCell = styled(TableCell)`
  white-space : nowrap;
  height      : 107px !important;
`;

ProductRow.IconButton = styled(IconButton)`
  margin : 25px !important;
`;

const withRecompose = compose(
  withStateHandlers(
    ({
      edit = {
        type    : false,
        title   : false,
        price   : false,
        inStock : false,
      },
    }) => ({ edit }),
    {
      toggleEdit : state => (cell, value) => {
        const edit = R.assoc(cell, value, state.edit);
        return ({ edit });
      },
    },
  ),
);

export default withRecompose(ProductRow);
