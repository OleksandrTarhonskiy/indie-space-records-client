import React, { Component } from 'react';
import styled               from 'styled-components';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';
import { ThemeProvider }    from 'styled-components';
import theme, { muiTheme }  from './layouts/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider }   from 'react-apollo';
import ShoppingCart         from '@material-ui/icons/ShoppingCart';
import IconButton           from '@material-ui/core/IconButton';

import client               from './graphql/client';
import CartButton           from './modules/merch/portals/cart_button';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <div>
              {routes}
            </div>
            <CartButton>
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </CartButton>
          </MuiThemeProvider>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

injectGlobal`
  body {
    padding : 0;
    margin  : 0;
  }
`;

export default App;
