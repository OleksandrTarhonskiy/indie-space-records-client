import React                from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                           from 'react-router-dom';

import HomePage             from '../home_page';
import NotFound             from '../not_found';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
