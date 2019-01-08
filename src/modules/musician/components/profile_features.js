import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import GradeIcon      from '@material-ui/icons/Grade';
import BuildIcon      from '@material-ui/icons/Build';
import Paper          from '@material-ui/core/Paper';
import StyleIcon      from '@material-ui/icons/Style';
import StarIcon       from '@material-ui/icons/Star';
import DoneIcon       from '@material-ui/icons/Done';
import MusicNote      from '@material-ui/icons/MusicNote';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link }       from 'react-router-dom';

const ProfileFeatures = ({ myProfile }) => (
  <ProfileFeatures.SettingsMenu
    position="static"
    color="default"
  >
    <ProfileFeatures.MenuItem to="/profile/events">
      <ProfileFeatures.MenuItemText>
        <GradeIcon />
        Events
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/music">
      <ProfileFeatures.MenuItemText>
        <MusicNote />
        My music
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to={myProfile.theme? `/musicians/${myProfile.id}` : '/musician/themes'}>
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
    <ProfileFeatures.MenuItem to="/profile/general">
      <ProfileFeatures.MenuItemText>
        <BuildIcon />
        Profile settings
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to={myProfile.theme? '/profile/settings' : '/musician/themes'}>
      <ProfileFeatures.MenuItemText>
        <StyleIcon />
        Customize my profile
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
    <ProfileFeatures.MenuItem to="/merch/all">
      <ProfileFeatures.MenuItemText>
        <StarIcon />
        My store
      </ProfileFeatures.MenuItemText>
    </ProfileFeatures.MenuItem>
  </ProfileFeatures.SettingsMenu>
);

ProfileFeatures.SettingsMenu = styled(Paper)`
  width          : 17%;
  display        : flex;
  flex-direction : column;
  background     : #f8f8f8;
  margin         : 1%;
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

ProfileFeatures.propTypes = {
  myProfile : PropTypes.object.isRequired,
};

export default ProfileFeatures;
