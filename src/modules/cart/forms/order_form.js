import React             from 'react';
import PropTypes         from 'prop-types';
import TextField         from '@material-ui/core/TextField';
import styled            from 'styled-components';
import * as R            from 'ramda';
import {
  compose,
  withStateHandlers,
}                        from 'recompose';

const OrderForm = ({
  form: {
    firstName,
    lastName,
    phoneNumber,
    email,
    deliveryType,
  },
  handleChange,
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
    </form>
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
  withStateHandlers(
    ({
      form       = {
        firstName    : '',
        lastName     : '',
        phoneNumber  : '',
        email        : '',
        deliveryType : '',
      },
    }) => ({ form }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },
    },
  ),
);

export default withRecompose(OrderForm);
