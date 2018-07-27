import React, { Component } from 'react';
import styled               from 'styled-components';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';

class App extends Component {
  render() {
    return (
      <App.AppWrapper>
        {routes}
      </App.AppWrapper>
    );
  }
}

App.AppWrapper = styled.div`
  margin  : 0;
  padding : 0;
`;

injectGlobal`
  body {
    margin: 0;
  }
`;

export default App;
