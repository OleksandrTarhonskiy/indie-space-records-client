import React                   from 'react';
import PropTypes               from 'prop-types';
import TextField               from '@material-ui/core/TextField';
import styled                  from 'styled-components';
import * as R                  from 'ramda';
import { graphql }             from 'react-apollo';
import { CountryDropdown }     from 'react-country-region-selector';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                              from 'recompose';

import { createOrderMutation } from '../graphql/mutations';
import Alert                   from '../../../layouts/alert';
import GradientButton          from '../../../layouts/gradient_button';
import withCart                from '../with_cart';

const OrderForm = ({
  form: {
    firstName,
    lastName,
    phoneNumber,
    email,
    city,
    deliveryAddress,
    deliveryType,
    country,
    zipCode,
  },
  handleChange,
  hasError,
  hideAlert,
  errorsList,
  handleFileUpload,
  create,
  products,
  handleRegionChange,
}) => (
  <OrderForm.FormWrapper>
    <form>
      <TextField
        name="firstName"
        label="First Name"
        type="text"
        margin="normal"
        value={firstName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="lastName"
        label="Last Name"
        type="text"
        margin="normal"
        value={lastName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
        type="text"
        margin="normal"
        value={phoneNumber}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="email"
        label="Email"
        margin="normal"
        value={email}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="deliveryAddress"
        label="Delivery Address"
        type="text"
        margin="normal"
        value={deliveryAddress}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="city"
        label="Town/City"
        type="text"
        margin="normal"
        value={city}
        onChange={handleChange}
        fullWidth
      />
      <CountryDropdown
        country={country}
        value={country}
        onChange={handleRegionChange.bind(null, 'country')}
      />
      <TextField
        name="zipCode"
        label="Zip Code"
        type="text"
        margin="normal"
        value={zipCode}
        onChange={handleChange}
        fullWidth
      />
      <GradientButton
        onClick={create}
      >
        Submit
      </GradientButton>
    </form>
    <Alert
      action="created"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </OrderForm.FormWrapper>
);

OrderForm.FormWrapper = styled.div`
  padding : 5%;
`;

OrderForm.propTypes = {
  form         : PropTypes.object.isRequired,
  handleChange : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(createOrderMutation),
  withCart,
  withStateHandlers(
    ({
      form       = {
        firstName       : '',
        lastName        : '',
        phoneNumber     : '',
        email           : '',
        deliveryType    : '',
        city            : '',
        deliveryAddress : '',
        country         : '',
        zipCode         : '',
      },
      hasError   = false,
      errorsList = [],
      canSubmit  = false,
    }) => ({ form, hasError, errorsList, canSubmit }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },

      handleRegionChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({ form });
      },

      showAlert    : () => () => ({ hasError: true }),
      hideAlert    : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    create : ({
      mutate,
      form: {
        firstName,
        lastName,
        phoneNumber,
        email,
        deliveryType,
      },
      errorsList,
      showAlert,
      products,
    }) => async () => {
      const response = await mutate({
        variables: {
          firstName,
          lastName,
          phoneNumber,
          email,
          deliveryType,
          products : JSON.stringify(products),
        }
      });

      const { ok, errors } = response.data.createOrder;

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

export default withRecompose(OrderForm);
