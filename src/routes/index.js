import React                from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                           from 'react-router-dom';

import HomePage             from '../modules/landing-page/pages/home_page';
import Header               from '../layouts/header';
import NotFound             from '../layouts/not_found';
import Footer               from '../layouts/footer';

export default (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </div>
);
