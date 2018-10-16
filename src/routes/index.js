import React                    from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                               from 'react-router-dom';

import HomePage                 from '../modules/landing-page/pages/home_page';
import Header                   from '../layouts/header';
import NotFound                 from '../layouts/not_found';
import Footer                   from '../layouts/footer';
import HelpContactPage          from '../modules/help-contact/pages/help_contact_page';
import MusicianSignUp           from '../modules/musician/pages/sign_up';
import FanSignUp                from '../modules/fan/pages/sign_up';
import InfoForMusicians         from '../modules/musician/pages/information';
import AllTagsPage              from '../modules/tags/pages/all_tags_page';
import LoginPage                from '../modules/auth/pages/login_page';
import LogoutPage               from '../modules/auth/pages/log_out_page';
import MusicianProfilePage      from '../modules/musician/pages/musician_profile_page';
import Profile                  from '../modules/musician/components/profile';
import ProfileThemeSettingsPage from '../modules/musician/pages/profile_theme_settings_page';
import MusicianEventsPage       from '../modules/events/pages/musician_events_page';
import EventPage                from '../modules/events/pages/event_page';
import EditEventPage            from '../modules/events/pages/edit_event_page';
import AllThemesPage            from '../modules/themes/pages/all_themes_page';
import FlatTheme                from '../modules/themes/components/flat_theme';
import PrivateRoute             from './private_route';

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
        <Route exact path="/events/:id"       component={EventPage} />
        <PrivateRoute exact path="/musician/home" component={MusicianProfilePage} />
        <PrivateRoute exact path="/musician/themes" component={AllThemesPage} />
        <PrivateRoute exact path="/demos/flat_theme" component={FlatTheme} />
        <PrivateRoute exact path="/me" component={Profile} />
        <PrivateRoute exact path="/profile/settings" component={ProfileThemeSettingsPage} />
        <PrivateRoute exact path="/profile/events" component={MusicianEventsPage} />
        <PrivateRoute exact path="/events/:id/edit" component={EditEventPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
