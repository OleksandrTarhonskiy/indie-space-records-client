import React             from 'react';
import { Route }         from 'react-router-dom';

import MusicianMerchPage from '../modules/musician/pages/musician_merch_page';
import AllEventsPage     from '../modules/musician/pages/all_events_page';
import ProductPage       from '../modules/merch/pages/product_page';
import ProfileHomePage   from '../modules/musician/pages/profile_home_page';

export default (
  <React.Fragment>
    <Route exact path="/musicians/:id"                  component={ProfileHomePage} />
    <Route exact path="/musicians/:id/merch"            component={MusicianMerchPage} />
    <Route exact path="/musicians/:id/events"           component={AllEventsPage} />
    <Route exact path="/musicians/:id/merch/:productId" component={ProductPage} />
  </React.Fragment>
);
