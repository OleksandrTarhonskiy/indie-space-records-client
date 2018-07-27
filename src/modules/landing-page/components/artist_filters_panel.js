import React        from 'react';
import styled       from 'styled-components';
import IconButton   from '@material-ui/core/IconButton';
import Headset      from '@material-ui/icons/Headset';
import LocationIcon from '@material-ui/icons/LocationOn';
import MusicNote    from '@material-ui/icons/MusicNote';
import Toolbar      from '@material-ui/core/Toolbar';

const ArtistFilters = () => (
  <ArtistFilters.SubSectionWrapper>
    <ArtistFilters.Toolbar>
      <ArtistFilters.Heading>
        Filters:
      </ArtistFilters.Heading>
      <ArtistFilters.IconButton color="inherit">
        <Headset />
      </ArtistFilters.IconButton >
      <p>listenings</p>
      <ArtistFilters.IconButton  color="inherit">
        <LocationIcon />
      </ArtistFilters.IconButton >
      <p>Location</p>
      <ArtistFilters.IconButton  color="inherit">
        <MusicNote />
      </ArtistFilters.IconButton >
      <p>Genre</p>
      <ArtistFilters.IconButton  color="inherit">
        #
      </ArtistFilters.IconButton >
      <p>Most popular tags</p>
    </ArtistFilters.Toolbar>
  </ArtistFilters.SubSectionWrapper>
);

ArtistFilters.SubSectionWrapper = styled.div`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
`;

ArtistFilters.Heading = styled.h2`
  font-size : 20px;
`;

ArtistFilters.Toolbar = styled(Toolbar)`
  display : flex;
`;

ArtistFilters.IconButton = styled(IconButton)`
  margin : 0 2% !important;
`;

export default ArtistFilters;
