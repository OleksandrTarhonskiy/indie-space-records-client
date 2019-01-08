import React               from 'react';
import PropTypes           from 'prop-types';
import { graphql }         from 'react-apollo';
import styled              from 'styled-components';
import Paper               from '@material-ui/core/Paper';
import CircularProgress    from '@material-ui/core/CircularProgress';

import ProfilePage         from './profile_page';
import { myProfilesQuery } from '../graphql/queries';
import Sidebar             from '../components/sidebar';

const ProfileThemeSettingsPage = ({ data: { loading, myProfile = {} } }) => (
  <ProfileThemeSettingsPage.Wrapper>
    {
      loading?
      <CircularProgress />
      :
      <Sidebar id={myProfile.id} />
    }
    <ProfileThemeSettingsPage.ProfileWrapper>
    {
        loading?
        <CircularProgress />
        :
        <ProfilePage myId={myProfile.id} />
      }
    </ProfileThemeSettingsPage.ProfileWrapper>
  </ProfileThemeSettingsPage.Wrapper>
);

ProfileThemeSettingsPage.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  background     : #eaedf5;
`;

ProfileThemeSettingsPage.SideBar = styled(Paper)`
  width            : 18%;
  background-color : #f8f8f8;
  display          : flex;
  flex-direction   : column;
  justify-content  : flex-start;
  padding          : 0;
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

export default graphql(myProfilesQuery)(ProfileThemeSettingsPage);
