import React                     from 'react';
import PropTypes                 from 'prop-types';
import styled                    from 'styled-components';
import TextField                 from '@material-ui/core/TextField';
import InputLabel                from '@material-ui/core/InputLabel';
import FormControl               from '@material-ui/core/FormControl';
import Input                     from '@material-ui/core/Input';
import Select                    from '@material-ui/core/Select';
import MenuItem                  from '@material-ui/core/MenuItem';
import Paper                     from '@material-ui/core/Paper';
import { graphql }               from 'react-apollo';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                                from 'recompose';
import * as R                    from 'ramda';

import { PRODUCTS_TYPES }        from '../models/types';
import GradientButton            from '../../../layouts/gradient_button';
import { createProductMutation } from '../graphql/mutations';
import Alert                     from '../../../layouts/alert';

const AddProductForm = ({
  form: {
    type,
    title,
    desc,
    price,
    deliveryType,
  },
  handleChange,
  hasError,
  hideAlert,
  errorsList,
  create,
}) => (
  <AddProductForm.FormWrapper>
    <AddProductForm.Section>
      <h2>About product:</h2>
      <AddProductForm.SelectWrapper>
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
      </AddProductForm.SelectWrapper>
      <TextField
        name="title"
        label="Title"
        type="text"
        margin="normal"
        onChange={handleChange}
        value={title}
        fullWidth
      />
      <TextField
        name="desc"
        label="Description"
        type="text"
        margin="normal"
        onChange={handleChange}
        value={desc}
        multiline={true}
        fullWidth
      />
      <h3>Upload product image:</h3>
      <GradientButton>
        Choose the file
      </GradientButton>
    </AddProductForm.Section>
    <AddProductForm.Section>
      <h2>Pricing:</h2>
      <AddProductForm.PriceBlock>
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
        <AddProductForm.PriceDesc>
          for 1 unit
        </AddProductForm.PriceDesc>
      </AddProductForm.PriceBlock>
    </AddProductForm.Section>
    <AddProductForm.Section>
      <h2>Delivery:</h2>
      <TextField
        name="deliveryType"
        label="delivery type"
        type="text"
        margin="normal"
        onChange={handleChange}
        value={deliveryType}
        multiline={true}
        fullWidth
      />
      <GradientButton
        onClick={create}
      >
        Submit
      </GradientButton>
    </AddProductForm.Section>
    <Alert
      action="created"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </AddProductForm.FormWrapper>
);

AddProductForm.FormWrapper = styled.form`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
`;

AddProductForm.Section = styled(Paper)`
  margin  : 2%;
  padding : 2%;
`;

AddProductForm.SelectWrapper = styled(FormControl)`
  width : 100%;
`;

AddProductForm.PriceBlock = styled.div`
  display        : flex;
  flex-direction : row;
`;

AddProductForm.PriceDesc = styled.p`
  margin : 3%;
`;

AddProductForm.propTypes = {
  form         : PropTypes.object.isRequired,
  create       : PropTypes.func.isRequired,
  handleChange : PropTypes.func.isRequired,
  hasError     : PropTypes.bool.isRequired,
  errorsList   : PropTypes.array.isRequired,
  hideAlert    : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(createProductMutation),
  withStateHandlers(
    ({
      form       = {
        type         : '',
        title        : '',
        desc         : '',
        price        : 0,
        deliveryType : '',
      },
      hasError   = false,
      errorsList = [],
    }) => ({ form, hasError, errorsList}),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },

      showAlert    : () => () => ({ hasError: true }),
      hideAlert    : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    create : ({
      mutate,
      form,
      errorsList,
      showAlert,
    }) => async () => {
      const response = await mutate({
        variables: form
      });

      const { ok, errors } = response.data.createProduct;

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

export default withRecompose(AddProductForm);
