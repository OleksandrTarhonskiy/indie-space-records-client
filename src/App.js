import React, { Component } from 'react';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';
import { ThemeProvider }    from 'styled-components';
import theme, { muiTheme }  from './layouts/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider }   from 'react-apollo';

import client                from './graphql/client';

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
