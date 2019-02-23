import React                  from 'react';
import { Switch }             from 'react-router-dom';
import styled                 from 'styled-components';
import breakpoint             from 'styled-components-breakpoint';
import Paper                  from '@material-ui/core/Paper';

import PrivateRoute           from '../../../routes/private_route';
import NavigationTabs         from '../components/navigation_tabs';
import { SETTINGS_PATH }      from '../models/settings_routing';
import EditProfilePage        from './edit_profile_page';
import ProfileContentSettings from './profile_content_settings';
import ProfileDataProvider    from '../HOCs/profile_data_provider';

const SettingsPage = () => (
  <ProfileDataProvider>
    <SettingsPage.PageWrapper>
      <SettingsPage.Header>
        <NavigationTabs />
      </SettingsPage.Header>
      <SettingsPage.FormWrapper>
        <Switch>
          <PrivateRoute exact path={SETTINGS_PATH.GENERAL} component={EditProfilePage} />
          <PrivateRoute exact path={SETTINGS_PATH.CONTENT} component={ProfileContentSettings} />
        </Switch>
      </SettingsPage.FormWrapper>
    </SettingsPage.PageWrapper>
  </ProfileDataProvider>
);

SettingsPage.FormWrapper = styled(Paper)`
  margin : 5%;
`;

SettingsPage.PageWrapper = styled.div`
  background : #eaedf5;
  padding    : 0 0 4%;
`;

SettingsPage.Header = styled.div`
  display         : flex;
  flex-direction  : column;
  width           : 100%;
  background      : #ffff;
  justify-content : center;
  box-shadow      : 0 3px 5px -1px rgba(0, 0, 0, 0.2);

  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

export default SettingsPage;
