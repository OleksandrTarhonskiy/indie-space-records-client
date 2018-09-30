import React          from 'react';
import styled         from 'styled-components';
import HomeIcon       from '@material-ui/icons/Home';
import GradeIcon      from '@material-ui/icons/Grade';
import BuildIcon      from '@material-ui/icons/Build';
import PersonIcon     from '@material-ui/icons/Person';
import StarIcon       from '@material-ui/icons/Star';
import DoneIcon       from '@material-ui/icons/Done';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link }       from 'react-router-dom';

const ProfileFeatures = () => (
  <ProfileFeatures.SettingsMenu
    position="static"
    color="default"
  >
    <ProfileFeatures.MenuItem to="/musician/home">
      <ProfileFeatures.MenuItemText>
        <HomeIcon />
        Home
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/">
      <ProfileFeatures.MenuItemText>
        <GradeIcon />
        Events
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/me">
      <ProfileFeatures.MenuItemText>
        <VisibilityIcon />
        My profile
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/musician/themes">
      <ProfileFeatures.MenuItemText>
        <DoneIcon />
        Choose Theme
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/profile/settings">
      <ProfileFeatures.MenuItemText>
        <BuildIcon />
        Customize my profile
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/">
      <ProfileFeatures.MenuItemText>
        <PersonIcon />
        Members
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/">
      <ProfileFeatures.MenuItemText>
        <StarIcon />
        My store
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
  </ProfileFeatures.SettingsMenu>
);

ProfileFeatures.SettingsMenu = styled.div`
  width          : 17%;
  display        : flex;
  flex-direction : column;
  background     : #f8f8f8;
`;

ProfileFeatures.MenuItem = styled(Link)`
&& {
  display         : flex;
  height          : 100px;
  width           : 100%;
  justify-content : center;
  flex-direction  : column;
  font-family     : 'Roboto', sans-serif;
  font-size       : 18px;
  cursor          : pointer;
  text-decoration : none;
  color           : #374142;
  outline         : none;

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
