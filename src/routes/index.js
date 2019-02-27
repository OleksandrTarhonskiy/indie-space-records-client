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
import LoginPage                from '../modules/auth/pages/login_page';
import LogoutPage               from '../modules/auth/pages/log_out_page';
import ProfileHomeWrapper       from '../modules/musician/pages/profile_home_wrapper';
import ProfileThemeSettingsPage from '../modules/musician/pages/profile_theme_settings_page';
import SettingsPage             from '../modules/musician/pages/settings_page';
import MusicianEventsPage       from '../modules/events/pages/musician_events_page';
import EventPage                from '../modules/events/pages/event_page';
import EditEventPage            from '../modules/events/pages/edit_event_page';
import AllThemesPage            from '../modules/themes/pages/all_themes_page';
import MerchMainPage            from '../modules/merch/pages/merch_main_page';
import BeautifulPlay            from '../modules/themes/components/beautiful_play';
import MainPage                 from '../modules/music/pages/main_page';
import UploadSong               from '../modules/music/pages/upload_song';
import AllMySongs               from '../modules/music/pages/all_my_songs';
import ProfileWrapper           from '../modules/musician/pages/profile_wrapper';
import AllProfilesPage          from '../modules/musician/pages/all_profiles_page';
import PrivateRoute             from './private_route';

export default (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/"                                        component={HomePage} />
        <Route exact path="/help_contact"                            component={HelpContactPage} />
        <Route exact path="/musician"                                component={InfoForMusicians} />
        <Route exact path="/musician/sign_up"                        component={MusicianSignUp} />
        <Route exact path="/fan/sign_up"                             component={FanSignUp} />
        <Route exact path="/login"                                   component={LoginPage} />
        <Route exact path="/logout"                                  component={LogoutPage} />
        <Route exact path="/events/:id"                              component={EventPage} />
        <Route exact path="/events/edit/:id"                         component={EditEventPage} />
        <PrivateRoute exact path="/musician/home"                    component={ProfileHomeWrapper} />
        <Route exact path="/musicians"                               component={AllProfilesPage} />
        <PrivateRoute exact path="/musician/themes"                  component={AllThemesPage} />
        <PrivateRoute exact path="/demos/beautiful_play"             component={BeautifulPlay} />
        <PrivateRoute path="/theme/settings"                         component={ProfileThemeSettingsPage} />
        <PrivateRoute exact path="/profile/events"                   component={MusicianEventsPage} />
        <PrivateRoute path="/profile"                                component={SettingsPage} />
        <PrivateRoute exact path="/music"                            component={MainPage} />
        <PrivateRoute exact path="/upload_song"                      component={UploadSong} />
        <PrivateRoute exact path="/music/all"                        component={AllMySongs} />
        <PrivateRoute path="/merch"                                  component={MerchMainPage} />
        <Route path="/musicians/:id"                           component={ProfileWrapper} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
