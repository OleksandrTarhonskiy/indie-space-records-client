import React       from 'react';
import {
  Link,
  Switch,
}                  from 'react-router-dom';
import styled      from 'styled-components';
import breakpoint  from 'styled-components-breakpoint';

import PrivateRoute from '../../../routes/private_route';

import NavigationTabs    from '../components/navigation_tabs';
import { SETTINGS_PATH } from '../models/settings_routing';
import EditProfilePage        from './edit_profile_page';
import ProfileContentSettings from './profile_content_settings';

const SettingsPage = () => (
  <div>
    <SettingsPage.Header>
      <SettingsPage.Title>Profile</SettingsPage.Title>
    </SettingsPage.Header>

    <NavigationTabs />

    <Switch>
      <PrivateRoute exact path={SETTINGS_PATH.GENERAL} component={EditProfilePage} />
      <PrivateRoute exact path={SETTINGS_PATH.CONTENT} component={ProfileContentSettings} />
    </Switch>
  </div>
);

SettingsPage.Header = styled.div`
  display         : flex;
  flex-direction  : column;
  justify-content : space-between;
  margin          : 30px 20px 20px;

  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

SettingsPage.Title = styled.h2`
  margin-bottom : 20px;
  font-size     : 32px;

  ${breakpoint('md')`
    margin-bottom: 0;
  `}
`;

export default SettingsPage;
