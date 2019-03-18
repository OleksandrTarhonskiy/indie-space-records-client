import React           from 'react';

import { CartContext } from './cart_context';

const withCart = Component => props => (
  <CartContext.Consumer>
    {
      value =>
        <Component {...props} {...value} />
    }
  </CartContext.Consumer>
);

export default withCart;
