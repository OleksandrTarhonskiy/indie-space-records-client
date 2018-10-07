import React        from 'react';
import PropTypes    from 'prop-types';
import Paper        from '@material-ui/core/Paper';
import styled       from 'styled-components';
import PersonIcon   from '@material-ui/icons/Person';
import MusicNote    from '@material-ui/icons/MusicNote';
import LocationIcon from '@material-ui/icons/LocationOn';
import Map          from '@material-ui/icons/Map';
import List         from '@material-ui/core/List';
import ListItem     from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const AboutProfile = ({
  profile: {
    name,
    genres,
    country,
    region,
  }
}) => (
  <AboutProfile.Wrapper>
    <AboutProfile.Headline>
      Personal Details:
    </AboutProfile.Headline>
    <AboutProfile.List>
      <ListItem>
        <PersonIcon />
        <ListItemText primary={`Profile (band) name: ${name}`}/>
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
    </AboutProfile.List>
  </AboutProfile.Wrapper>
);

AboutProfile.Wrapper = styled(Paper)`
  margin : 1% 0;
  width  : 80%;
  padding : 5%;
  display : flex;
  flex-direction : column;
`;

AboutProfile.Headline = styled.h2`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
`;

AboutProfile.List = styled(List)`
  color       : #565656;
`;

AboutProfile.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default AboutProfile;
