import React            from 'react';
import PropTypes        from 'prop-types';
import Tab              from '@material-ui/core/Tab';
import Tabs             from '@material-ui/core/Tabs';
import { withRouter }   from 'react-router';
import { Link }         from 'react-router-dom';
import { compose }      from 'recompose';

import {
  SETTINGS_PATH,
  SETTINGS_PATHS,
}                       from '../models/settings_routing';
import withProfileData  from '../HOCs/with_profile_data';

const mapLocationToTab = ({ pathname }) => SETTINGS_PATHS.indexOf(pathname);

const NavigationTabs = ({
  location,
  profile: {
    myProfile: {
      theme,
    },
  },
}) => (
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
      disabled={!theme}
    />
  </Tabs>
);

NavigationTabs.propTypes = {
  location : PropTypes.object.isRequired,
  profile  : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  withProfileData,
);

export default withRecompose(NavigationTabs);
