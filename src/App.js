import React, { Component } from 'react';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';
import { ThemeProvider }    from 'styled-components';
import theme, { muiTheme }  from './layouts/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloClient }     from 'apollo-client';
import { createHttpLink }   from 'apollo-link-http';
import { InMemoryCache }    from 'apollo-cache-inmemory';
import { ApolloProvider }   from 'react-apollo';
import { setContext }       from 'apollo-link-context';
import { ApolloLink }       from 'apollo-link';
import { withClientState }  from 'apollo-link-state'
import gql                  from 'graphql-tag';

import Routes                from './routes';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache()

const httpLink = createHttpLink({ uri: 'http://localhost:8080/graphql' });

const defaultState = {}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
})

const middlewareLink = setContext(() => ({
  headers: {
    'x-token': localStorage.getItem('token'),
    'x-refresh-token': localStorage.getItem('refreshToken'),
  },
}));

const afterwareLink = new ApolloLink((operation, forward) => {
  const { headers } = operation.getContext();

  if (headers) {
    const token = headers.get('x-token');
    const refreshToken = headers.get('x-refresh-token');

    if (token) {
      localStorage.setItem('token', token);
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }
  }

  return forward(operation);
});

const link = afterwareLink.concat(middlewareLink.concat(httpLink));

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    link,
  ]),
  cache
})

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
