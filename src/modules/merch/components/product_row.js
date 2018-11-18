import React              from 'react';
import PropTypes          from 'prop-types';
import styled             from 'styled-components';
import TableCell          from '@material-ui/core/TableCell';
import TableRow           from '@material-ui/core/TableRow';
import TextField          from '@material-ui/core/TextField';
import InputLabel         from '@material-ui/core/InputLabel';
import FormControl        from '@material-ui/core/FormControl';
import Input              from '@material-ui/core/Input';
import Select             from '@material-ui/core/Select';
import MenuItem           from '@material-ui/core/MenuItem';
import IconButton         from '@material-ui/core/IconButton';
import CloseIcon          from '@material-ui/icons/Close';
import * as R             from 'ramda';
import {
  compose,
  withStateHandlers,
}                         from 'recompose';

import { PRODUCTS_TYPES } from '../models/types';

const ProductRow = ({
  product: {
    type,
    title,
    price,
    inStock,
  },
  toggleEdit,
  edit,
  handleChange,
}) => (
  <TableRow>
    {
      edit.type ?
      <ProductRow.TableCell>
        <ProductRow.SelectWrapper>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="type"
          >
            Type of product
          </InputLabel>
          <Select
            value={type}
            onChange={handleChange}
            input={
              <Input
                name="type"
                id="type"
              />
            }
          >
            { PRODUCTS_TYPES.map((t, index) => <MenuItem key={index} value={t}>{t}</MenuItem>) }
          </Select>
        </ProductRow.SelectWrapper>
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
          onChange={handleChange}
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
          label="Price"
          value={price}
          onChange={handleChange}
          name="price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
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

ProductRow.SelectWrapper = styled(FormControl)`
  width       : 70%;
  padding-top : 14px !important;
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
      product = {
        type         : '',
        title        : '',
        price        : 0,
      },
    }) => ({ edit, product }),
    {
      toggleEdit : state => (cell, value) => {
        const edit = R.assoc(cell, value, state.edit);
        return ({ edit });
      },

      handleChange : state => ({ target }) => {
        const product = R.assoc(target.name, target.value, state.product);
        return ({ product });
      },
    },
  ),
);

export default withRecompose(ProductRow);
