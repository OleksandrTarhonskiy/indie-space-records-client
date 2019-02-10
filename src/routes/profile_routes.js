import React             from 'react';
import { Route }         from 'react-router-dom';

import MusicianMerchPage from '../modules/musician/pages/musician_merch_page';
import ProfileEventsPage from '../modules/musician/pages/profile_events_page';
import ProductPage       from '../modules/merch/pages/product_page';
import ProfilePage       from '../modules/musician/pages/profile_page';

export default (
  <React.Fragment>
    <Route exact path="/musicians/:id"                  component={ProfilePage} />
    <Route exact path="/musicians/:id/merch"            component={MusicianMerchPage} />
    <Route exact path="/musicians/:id/events"           component={ProfileEventsPage} />
    <Route exact path="/musicians/:id/merch/:productId" component={ProductPage} />
  </React.Fragment>
);
