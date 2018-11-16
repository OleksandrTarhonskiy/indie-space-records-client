import React         from 'react';
import PropTypes     from 'prop-types';
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
      <TableCell>
        <TextField
          name="type"
          label="type"
          margin="normal"
          value={type}
          fullWidth
        />
        <IconButton onClick={toggleEdit.bind(null, 'type', false)}>
          <CloseIcon />
        </IconButton>
      </TableCell>
      :
      <TableCell onClick={toggleEdit.bind(null, 'type', true)}>{type}</TableCell>
    }
    {
      edit.title ?
      <TableCell>
        <TextField
          name="title"
          label="Title"
          margin="normal"
          value={title}
          fullWidth
        />
        <IconButton onClick={toggleEdit.bind(null, 'title', false)}>
          <CloseIcon />
        </IconButton>
      </TableCell>
      :
      <TableCell onClick={toggleEdit.bind(null, 'title', true)}>{title}</TableCell>
    }
    {
      edit.price ?
      <TableCell>
        <TextField
          name="price"
          label="price"
          margin="normal"
          value={price}
          fullWidth
        />
        <IconButton onClick={toggleEdit.bind(null, 'price', false)}>
          <CloseIcon />
        </IconButton>
      </TableCell>
      :
      <TableCell onClick={toggleEdit.bind(null, 'price', true)}>{price}</TableCell>
    }
    {
      edit.inStock ?
      <TableCell>
        <TextField
          name="inStock"
          label="in stock"
          margin="normal"
          value={inStock}
          fullWidth
        />
        <IconButton onClick={toggleEdit.bind(null, 'inStock', false)}>
          <CloseIcon />
        </IconButton>
      </TableCell>
      :
      <TableCell onClick={toggleEdit.bind(null, 'inStock', true)}>{String(inStock)}</TableCell>
    }
    <TableCell numeric>{0}</TableCell>
    <TableCell numeric>{0}</TableCell>
  </TableRow>
);

ProductRow.propTypes = {
  product : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withStateHandlers(
    ({
      edit = {
        type : false,
        title : false,
        price : false,
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
