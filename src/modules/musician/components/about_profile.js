import React           from 'react';
import PropTypes       from 'prop-types';
import Paper           from '@material-ui/core/Paper';
import styled          from 'styled-components';
import PersonIcon      from '@material-ui/icons/Person';
import MusicNote       from '@material-ui/icons/MusicNote';
import LocationIcon    from '@material-ui/icons/LocationOn';
import Map             from '@material-ui/icons/Map';
import AttachMoney     from '@material-ui/icons/AttachMoney';
import List            from '@material-ui/core/List';
import ListItem        from '@material-ui/core/ListItem';
import ListItemText    from '@material-ui/core/ListItemText';
import Button          from '@material-ui/core/Button';
import { Link }        from 'react-router-dom';

import ProfileFeatures from './profile_features';

const AboutProfile = ({
  profile: {
    id,
    name,
    genres,
    country,
    region,
    theme,
    currency,
  }
}) => (
  <AboutProfile.Wrapper>
    <ProfileFeatures
      hasTheme={theme? true : false}
      id={id}
    />
    <AboutProfile.List>
      <ListItem>
        <AboutProfile.Headline>
          Personal Details:
        </AboutProfile.Headline>
      </ListItem>
      <ListItem>
        <PersonIcon />
        <ListItemText primary={`Musician (band) name: ${name}`}/>
      </ListItem>
      <ListItem>
        <MusicNote />
        <ListItemText primary={`Genres: ${genres}`}/>
      </ListItem>
      <ListItem>
        <Map />
        <ListItemText primary={`Your country: ${country}`}/>
      </ListItem>
      <ListItem>
        <LocationIcon />
        <ListItemText primary={`Your region: ${region}`}/>
      </ListItem>
      <ListItem>
        <AttachMoney />
        <ListItemText primary={`Currency: ${currency}`}/>
      </ListItem>
      <ListItem>
        <AboutProfile.Link
          component={Link}
          to="/musicians"
        >
          All musicians profiles
        </AboutProfile.Link>
      </ListItem>
    </AboutProfile.List>
  </AboutProfile.Wrapper>
);

AboutProfile.Wrapper = styled(Paper)`
  margin : 2% auto;
  width  : 80%;
  padding : 2% 8% 2% 0;
  display : flex;
  flex-direction : row;
`;

AboutProfile.Headline = styled.h2`
  color       : #565656;
  font-size   : 30px;
  font-family : 'Pacifico', cursive;
`;

AboutProfile.List = styled(List)`
  color  : #565656;
  margin : 0 8% !important;
`;

AboutProfile.Link = styled(Button)`
  background      : linear-gradient(to right, #723af9, #46aafc);
  margin-top      : 8%;
  color           : #ffff !important;
`;

AboutProfile.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default AboutProfile;
