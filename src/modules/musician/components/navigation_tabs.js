import React          from 'react';
import Tab            from '@material-ui/core/Tab';
import Tabs           from '@material-ui/core/Tabs';
import { withRouter } from 'react-router';
import { Link }       from 'react-router-dom';

import {
  SETTINGS_PATH,
  SETTINGS_PATHS,
}                     from '../models/settings_routing';

const mapLocationToTab = ({ pathname }) => SETTINGS_PATHS.indexOf(pathname);
console.log(mapLocationToTab)
const NavigationTabs = ({ location }) => (
  <Tabs
    value={mapLocationToTab(location)}
    indicatorColor="primary"
    textColor="primary"
    scrollable
    scrollButtons="off"
  >
    <Tab
      label="General Profile settings"
      component={Link}
      to={SETTINGS_PATH.GENERAL}
    />
    <Tab
      label="Section content settings"
      component={Link}
      to={SETTINGS_PATH.CONTENT}
    />
  </Tabs>
);

export default withRouter(NavigationTabs);
