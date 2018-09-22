import React          from 'react';
import AppBar         from '@material-ui/core/AppBar';
import Toolbar        from '@material-ui/core/Toolbar';
import styled         from 'styled-components';
import HomeIcon       from '@material-ui/icons/Home';
import GradeIcon      from '@material-ui/icons/Grade';
import VisibilityIcon from '@material-ui/icons/Visibility';

const ProfileFeatures = () => (
  <ProfileFeatures.SettingsMenu
    position="static"
    color="default"
  >
    <Toolbar>
      <ProfileFeatures.MenuItem>
        <ProfileFeatures.MenuItemText>
          Home
          <HomeIcon />
        </ProfileFeatures.MenuItemText>
      </ProfileFeatures.MenuItem>
      <ProfileFeatures.MenuItem>
        <ProfileFeatures.MenuItemText>
          Events
          <GradeIcon />
        </ProfileFeatures.MenuItemText>
      </ProfileFeatures.MenuItem>
      <ProfileFeatures.MenuItem>
        <ProfileFeatures.MenuItemText>
          My profile
          <VisibilityIcon />
        </ProfileFeatures.MenuItemText>
      </ProfileFeatures.MenuItem>
    </Toolbar>
  </ProfileFeatures.SettingsMenu>
);

ProfileFeatures.SettingsMenu = styled(AppBar)`
`;

ProfileFeatures.MenuItem = styled.div`
&& {
  display         : flex;
  height          : 100%;
  width           : 10%;
  justify-content : center;
  flex-direction  : column;
  font-family     : 'Roboto', sans-serif;
  font-size       : 25px;
  cursor          : pointer;

    &:hover {
      background : #e9e9e9;
    }
  }
`;

ProfileFeatures.MenuItemText = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : center;
`;

export default ProfileFeatures;
