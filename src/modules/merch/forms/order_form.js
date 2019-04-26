import React                   from 'react';
import PropTypes               from 'prop-types';
import TextField               from '@material-ui/core/TextField';
import styled                  from 'styled-components';
import * as R                  from 'ramda';
import { graphql }             from 'react-apollo';
import { CountryDropdown }     from 'react-country-region-selector';
import validator               from 'validator';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                              from 'recompose';
import ReactPhoneInput         from 'react-phone-input-2';
import Button                  from '@material-ui/core/Button';

import { createOrderMutation } from '../graphql/mutations';
import Alert                   from '../../../layouts/alert';
import withCart                from '../../cart/with_cart';
import withTheme               from '../../musician/HOCs/with_theme';
import                         'react-phone-input-2/dist/style.css';

const OrderForm = ({
  form: {
    firstName,
    lastName,
    phoneNumber,
    email,
    city,
    deliveryAddress,
    country,
    zipCode,
  },
  handleChange,
  hasError,
  hideAlert,
  errorsList,
  create,
  handleOnChange,
  canSubmit,
  theme: {
    style,
    fonts,
  },
}) => (
  <OrderForm.FormWrapper
    profileFonts={JSON.parse(fonts)}
    profileStyles={JSON.parse(style)}
  >
    <form>
      <OrderForm.FormContainer>
        <h2>
          Customer Details
        </h2>
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
        <ReactPhoneInput
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleOnChange.bind(null, 'phoneNumber')}
        />
        <TextField
          name="email"
          label="Email"
          margin="normal"
          value={email}
          onChange={handleChange}
          fullWidth
        />
      </OrderForm.FormContainer>
      <OrderForm.FormContainer>
        <h2>
          Delivery details
        </h2>
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
          onChange={handleOnChange.bind(null, 'country')}
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
      </OrderForm.FormContainer>
      <OrderForm.SubmitButton
        onClick={create}
        disabled={!canSubmit}
        font={JSON.parse(fonts)}
        styles={JSON.parse(style)}
      >
        Submit
      </OrderForm.SubmitButton>
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
  font-family      : ${props => props.profileFonts.regularTextFont}, sans-serif;
  font-size        : ${props => props.profileStyles.RegularFontSize}px;
  padding          : 5%;
`;

OrderForm.FormContainer = styled.div`
  margin  : 15px;
  padding : 8px;
`;

OrderForm.SubmitButton = styled(Button)`
&& {
  font-family      : ${props => props.font.linksFont}, sans-serif;
  background-color : ${props => props.styles.buttonsBackground};
  height           : 62px;
  color            : ${props => props.styles.buttonsColor};
  border           : ${props => props.styles.border}px solid;
  border-radius    : ${props => props.styles.borderRadius}px;
  margin           : 0;
  padding          : 1% 5%;

  &:hover {
    color      : ${props => props.styles.LinksHover};
    background : transparent;
  }
}
`;

OrderForm.propTypes = {
  form           : PropTypes.object.isRequired,
  handleChange   : PropTypes.func.isRequired,
  theme          : PropTypes.object.isRequired,
  hasError       : PropTypes.bool.isRequired,
  errorsList     : PropTypes.array.isRequired,
  hideAlert      : PropTypes.func.isRequired,
  handleOnChange : PropTypes.func.isRequired,
  canSubmit      : PropTypes.bool.isRequired,
  create         : PropTypes.func.isRequired,
};

const canSubmitForm = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  city,
  deliveryAddress,
  deliveryType,
  country,
  zipCode,
}) => R.all(R.equals(true))([
  !R.isEmpty(firstName),
  !R.isEmpty(lastName),
  !R.isEmpty(phoneNumber),
  validator.isEmail(email),
  !R.isEmpty(city),
  !R.isEmpty(deliveryAddress),
  !R.isEmpty(country),
  !R.isEmpty(zipCode),
]);

const withRecompose = compose(
  withTheme,
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
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },

      handleOnChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
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
        city,
        deliveryAddress,
        deliveryType,
        country,
        zipCode,
      },
      errorsList,
      showAlert,
      products,
      clearCart,
    }) => async () => {
      const response = await mutate({
        variables: {
          firstName,
          lastName,
          phoneNumber,
          email,
          city,
          deliveryAddress,
          deliveryType,
          country,
          zipCode,
          products : JSON.stringify(products),
        }
      });

      const { ok, errors } = response.data.createOrder;

      if (ok) {
        clearCart();
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
