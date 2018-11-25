import React                     from 'react';
import PropTypes                 from 'prop-types';
import styled                    from 'styled-components';
import TableCell                 from '@material-ui/core/TableCell';
import TableRow                  from '@material-ui/core/TableRow';
import TextField                 from '@material-ui/core/TextField';
import InputLabel                from '@material-ui/core/InputLabel';
import Radio                     from '@material-ui/core/Radio';
import RadioGroup                from '@material-ui/core/RadioGroup';
import FormControlLabel          from '@material-ui/core/FormControlLabel';
import FormControl               from '@material-ui/core/FormControl';
import Input                     from '@material-ui/core/Input';
import Select                    from '@material-ui/core/Select';
import MenuItem                  from '@material-ui/core/MenuItem';
import IconButton                from '@material-ui/core/IconButton';
import DoneIcon                  from '@material-ui/icons/Done';
import CloseIcon                 from '@material-ui/icons/Close';
import { graphql }               from 'react-apollo';
import * as R                    from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                                from 'recompose';

import { PRODUCTS_TYPES }        from '../models/types';
import { updateProductMutation } from '../graphql/mutations';
import Alert                     from '../../../layouts/alert';

const ProductRow = ({
  product: {
    id,
    type,
    title,
    price,
    inStock,
  },
  toggleEdit,
  edit,
  handleChange,
  create,
  hasError,
  hideAlert,
  errorsList,
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
          <ProductRow.IconButton onClick={create}>
            <DoneIcon />
          </ProductRow.IconButton>
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
          <ProductRow.TextField
            name="title"
            label="Title"
            margin="normal"
            onChange={handleChange}
            value={title}
            fullWidth
          />
          <ProductRow.IconButton onClick={create}>
            <DoneIcon />
          </ProductRow.IconButton>
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
          <ProductRow.TextField
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
          <ProductRow.IconButton onClick={create}>
            <DoneIcon />
          </ProductRow.IconButton>
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
          <FormControl component="fieldset">
            <RadioGroup
              name="inStock"
              value={String(inStock)}
              onChange={handleChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="yes"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="no"
              />
            </RadioGroup>
          </FormControl>
          <ProductRow.IconButton onClick={create}>
            <DoneIcon />
          </ProductRow.IconButton>
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
    <Alert
      action="update"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </TableRow>
);

ProductRow.propTypes = {
  product      : PropTypes.object.isRequired,
  toggleEdit   : PropTypes.func.isRequired,
  handleChange : PropTypes.func.isRequired,
  hasError     : PropTypes.bool.isRequired,
  errorsList   : PropTypes.array.isRequired,
  hideAlert    : PropTypes.func.isRequired,
  create       : PropTypes.func.isRequired,
  edit         : PropTypes.object.isRequired,
};

ProductRow.TableCell = styled(TableCell)`
  white-space : nowrap;
  height      : 107px !important;
  font-weight : 500 !important;
  font-size   : 16px !important;
  color       : #3c3c3e !important;
`;

ProductRow.IconButton = styled(IconButton)`
  margin : 25px 5px !important;
`;

ProductRow.SelectWrapper = styled(FormControl)`
  width       : 70%;
  padding-top : 14px !important;
`;

ProductRow.TextField = styled(TextField)`
  width : 65% !important;
`;

const withRecompose = compose(
  graphql(updateProductMutation),
  withStateHandlers(
    ({
      edit      = {
        type    : false,
        title   : false,
        price   : false,
        inStock : false,
      },
      product   = {
        type    : '',
        title   : '',
        price   : 0,
        inStock : 'true',
      },
      hasError   = false,
      errorsList = [],
    }) => ({ edit, product, hasError, errorsList}),
    {
      toggleEdit  : state => (cell, value) => {
        const edit = R.assoc(cell, value, state.edit);
        return ({ edit });
      },

      handleChange : state => ({ target }) => {
        const product = R.assoc(target.name, target.value, state.product);
        console.log(target);
        return ({ product });
      },

      showAlert    : () => () => ({ hasError: true }),
      hideAlert    : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    create : ({
      mutate,
      product,
      errorsList,
      showAlert,
    }) => async () => {
      const response = await mutate({
        variables: {
          productId : product.id,
          type      : product.type,
          title     : product.title,
          price     : product.price,
          inStock   : product.inStock === 'true' ? true : false,
        }
      });

      const { ok, errors } = response.data.updateProduct;

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

export default withRecompose(ProductRow);
