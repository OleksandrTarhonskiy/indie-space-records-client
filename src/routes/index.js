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
import HelpContactPage      from '../modules/help-contact/pages/help_contact_page';
import MusicianSignUp       from '../modules/musician/pages/sign_up';
import FanSignUp            from '../modules/fan/pages/sign_up';
import InfoForMusicians     from '../modules/musician/pages/information';
import AllTagsPage          from '../modules/tags/pages/all_tags_page';
import LoginPage            from '../modules/auth/pages/login_page';
import LogoutPage           from '../modules/auth/pages/log_out_page';
import GetStarted           from '../modules/musician/pages/get_started';
import PrivateRoute         from './private_route';

export default (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/"                 component={HomePage} />
        <Route exact path="/help_contact"     component={HelpContactPage} />
        <Route exact path="/musician"         component={InfoForMusicians} />
        <Route exact path="/musician/sign_up" component={MusicianSignUp} />
        <Route exact path="/fan/sign_up"      component={FanSignUp} />
        <Route exact path="/tags"             component={AllTagsPage} />
        <Route exact path="/login"            component={LoginPage} />
        <Route exact path="/logout"           component={LogoutPage} />
        <PrivateRoute exact path="/musician/profile" component={GetStarted} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
