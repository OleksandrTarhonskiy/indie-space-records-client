import React                       from 'react';
import PropTypes                   from 'prop-types';
import { graphql }                 from 'react-apollo';
import styled                      from 'styled-components';
import Paper                       from '@material-ui/core/Paper';
import CircularProgress            from '@material-ui/core/CircularProgress';

import ProfileThemeSettings        from '../forms/profile_theme_settings';
import MyProfilePage               from './my_profile_page';
import { myProfileWithThemeQuery } from '../graphql/queries';

const ProfileThemeSettingsPage = ({ data: { loading, myProfile = {} } }) => (
  <ProfileThemeSettingsPage.Wrapper>
    <ProfileThemeSettingsPage.SideBar>
      {
        loading?
          <CircularProgress />
          :
          <ProfileThemeSettings
            key={myProfile.id}
            styles={JSON.parse(myProfile.theme.style)}
            fonts={JSON.parse(myProfile.theme.fonts)}
          />
      }
    </ProfileThemeSettingsPage.SideBar>
    <ProfileThemeSettingsPage.ProfileWrapper>
      <MyProfilePage />
    </ProfileThemeSettingsPage.ProfileWrapper>
  </ProfileThemeSettingsPage.Wrapper>
);

ProfileThemeSettingsPage.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  background     : #eaedf5;
`;

ProfileThemeSettingsPage.SideBar = styled(Paper)`
  width            : 15%;
  background-color : #f8f8f8;
  display          : flex;
  flex-direction   : column;
  justify-content  : flex-start;
  padding-left     : 3%;
  padding-top      : 5%;
  margin           : 1%;
`;

ProfileThemeSettingsPage.ProfileWrapper = styled(Paper)`
  width   : 80%;
  padding : 1%;
  margin  : 1% 0;
`;

ProfileThemeSettingsPage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(myProfileWithThemeQuery)(ProfileThemeSettingsPage);
