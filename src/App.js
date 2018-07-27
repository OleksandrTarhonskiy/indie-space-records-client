import React, { Component } from 'react';
import routes               from './routes';
import { injectGlobal }     from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
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
