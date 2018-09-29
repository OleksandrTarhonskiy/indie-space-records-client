import React                from 'react';
import {
  gql,
  graphql
}                           from 'react-apollo';
import styled               from 'styled-components';

import ProfileThemeSettings from '../forms/profile_theme_settings';
import Profile              from '../components/profile';

const ProfileThemeSettingsPage = ({ data: { allProfiles = []} }) => (
  <ProfileThemeSettingsPage.Wrapper>
    <ProfileThemeSettingsPage.SideBar>
      {allProfiles.map(profile =>
        <ProfileThemeSettings
          key={profile.id}
          styles={JSON.parse(profile.theme.style)}
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
`;

ProfileThemeSettingsPage.SideBar = styled.div`
  width            : 17%;
  background-color : #f8f8f8;
  display          : flex;
  flex-direction   : column;
  justify-content  : center;
  padding-left     : 3%;
`;

ProfileThemeSettingsPage.ProfileWrapper = styled.div`
  width   : 80%;
  padding : 10% 0;
`;

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      theme {
        style
      }
    }
  }
`;

export default graphql(allProfilesQuery)(ProfileThemeSettingsPage);
