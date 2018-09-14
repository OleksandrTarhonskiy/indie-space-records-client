import React, { Component } from 'react';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';
import { ThemeProvider }    from 'styled-components';
import theme, { muiTheme }  from './layouts/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
}                           from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql',
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      req.options.headers['x-token'] = localStorage.getItem('token');
      req.options.headers['x-refresh-token'] = localStorage.getItem('refreshToken');
      next();
    },
  },
]);

networkInterface.useAfter([
  {
    applyAfterware({ response: { headers } }, next) {
      const token = headers.get('x-token');
      const refreshToken = headers.get('x-refresh-token');

      if (token) {
        localStorage.setItem('token', token);
      }

      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }

      next();
    },
  },
]);

const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <div>
              {routes}
            </div>
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
