import React, { Component } from 'react';
import styled               from 'styled-components';
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
