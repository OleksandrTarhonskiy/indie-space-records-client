import React          from 'react';
import PropTypes      from 'prop-types';
import Tab            from '@material-ui/core/Tab';
import Tabs           from '@material-ui/core/Tabs';
import { withRouter } from 'react-router';
import { Link }       from 'react-router-dom';

import {
  MERCH_PATH,
  MERCH_PATHS,
}                     from '../models/merch_routing';

const mapLocationToTab = ({ pathname }) => MERCH_PATHS.indexOf(pathname);

const NavTabs = ({ location }) => (
  <Tabs
    value={mapLocationToTab(location)}
    indicatorColor="primary"
    textColor="primary"
    scrollable
    scrollButtons="off"
  >
    <Tab
      label="All my products"
      component={Link}
      to={MERCH_PATH.PRODUCTS}
    />
    <Tab
      label="Create new product"
      component={Link}
      to={MERCH_PATH.CREATE}
    />
    <Tab
      label="Orders"
      component={Link}
      to={MERCH_PATH.ORDERS}
    />
  </Tabs>
);

NavTabs.propTypes = {
  location : PropTypes.object.isRequired,
};

export default withRouter(NavTabs);
