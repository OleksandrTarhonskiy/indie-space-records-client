import React, { Component } from 'react';
import styled               from 'styled-components';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';
import { ThemeProvider }    from 'styled-components';
import theme, { muiTheme }  from './layouts/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider }   from 'react-apollo';
import ShoppingCart         from '@material-ui/icons/ShoppingCart';
import Badge                from '@material-ui/core/Badge';
import IconButton           from '@material-ui/core/IconButton';

import client               from './graphql/client';
import CartButton           from './modules/merch/portals/cart_button';
import CartProvider         from './cart_provider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [],
    };

    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('Cart')) || [];
    this.setState({products});
  }

  setProduct(product, profileId) {
    const productsList = [...this.state.products];
    productsList.push(product);
    this.setState({ products : productsList });

    const shoppingCart = JSON.parse(localStorage.getItem('Cart')) || [];
    const productData = {
      id      : product.id,
      title   : product.title,
      type    : product.type,
      price   : product.price,
      storeId : profileId,
    };

    shoppingCart.push(productData);
    localStorage.setItem('Cart', JSON.stringify(shoppingCart));
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <CartProvider value={{setProduct : this.setProduct}}>
              <div>
                {routes}
              </div>
              {
                this.state.products.length > 0 &&
                <CartButton>
                  <CartButtonBadge badgeContent={this.state.products.length} color="primary">
                    <ShoppingCartButton>
                      <ShoppingCart />
                    </ShoppingCartButton>
                  </CartButtonBadge>
                </CartButton>
              }
            </CartProvider>
          </MuiThemeProvider>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

const CartButtonBadge = styled(Badge)`
  position   : fixed !important;
  z-index    : 3000;
  text-align : center;
  bottom     : 100px;
  right      : 25px;
  position   : fixed !important;
  z-index    : 3000;
  text-align : center;
  z-index    : 3500;
`;


const ShoppingCartButton = styled(IconButton)`
  position   : fixed !important;
  z-index    : 3000;
  text-align : center;
  bottom     : 20px;
  right      : 20px;
  background : #ffff !important;
  height     : 80px;
  width      : 80px;
  box-shadow : 3px 10px 5px -8px rgba(0,0,0,0.75);
`;

injectGlobal`
  body {
    padding : 0;
    margin  : 0;
  }
`;

export default App;
