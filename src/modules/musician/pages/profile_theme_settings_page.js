import React                from 'react';
import {
  gql,
  graphql
}                           from 'react-apollo';
import styled               from 'styled-components';
import Paper                from '@material-ui/core/Paper';

import ProfileThemeSettings from '../forms/profile_theme_settings';
import Profile              from '../components/profile';

const ProfileThemeSettingsPage = ({ data: { allProfiles = []} }) => (
  <ProfileThemeSettingsPage.Wrapper>
    <ProfileThemeSettingsPage.SideBar>
      {allProfiles.map(profile =>
        <ProfileThemeSettings
          key={profile.id}
          styles={JSON.parse(profile.theme.style)}
          fonts={JSON.parse(profile.theme.fonts)}
        />
      )}
    </ProfileThemeSettingsPage.SideBar>
    <ProfileThemeSettingsPage.ProfileWrapper>
      <Profile />
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

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      theme {
        style
        fonts
      }
    }
  }
`;

export default graphql(allProfilesQuery)(ProfileThemeSettingsPage);
