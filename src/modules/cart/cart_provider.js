import React           from 'react';
import PropTypes       from 'prop-types';

import { CartContext } from './cart_context';

const CartProvider = ({ value, children }) => (
  <React.Fragment>
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  </React.Fragment>
);

CartProvider.propTypes = {
  value    : PropTypes.function,
  children : PropTypes.array,
};

export default CartProvider;
