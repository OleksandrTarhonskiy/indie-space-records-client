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
import AllTagsPage          from '../modules/tags/pages/all_tags_page';

export default (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/"                 component={HomePage} />
        <Route exact path="/help_contact"     component={HelpContactPage} />
        <Route exact path="/musician/sign_up" component={MusicianSignUp} />
        <Route exact path="/tags"             component={AllTagsPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
