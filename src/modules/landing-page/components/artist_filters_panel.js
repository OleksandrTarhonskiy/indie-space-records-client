import React        from 'react';
import * as R       from 'ramda';
import styled       from 'styled-components';
import PropTypes    from 'prop-types';
import IconButton   from '@material-ui/core/IconButton';
import Headset      from '@material-ui/icons/Headset';
import LocationIcon from '@material-ui/icons/LocationOn';
import MusicNote    from '@material-ui/icons/MusicNote';
import Toolbar      from '@material-ui/core/Toolbar';
import {
  compose,
  withStateHandlers,
}                   from 'recompose';

import Genres       from './genres';
import Locations    from './locations';

const ArtistFilters = ({
  filters: {
    genre,
    location,
  },
  openFilters,
  closeFilters,
}) => (
  <ArtistFilters.SubSectionWrapper>
    <ArtistFilters.Toolbar>
      <ArtistFilters.Heading>
        Filters:
      </ArtistFilters.Heading>
      <ArtistFilters.IconButton color="inherit">
        <Headset />
      </ArtistFilters.IconButton >
      <p>listenings</p>
      <ArtistFilters.IconButton
        color="inherit"
        onClick={location ? closeFilters : openFilters}
        name="location"
        active={location}
      >
        <LocationIcon />
      </ArtistFilters.IconButton >
      <p>Location</p>
      <ArtistFilters.IconButton
        color="inherit"
        onClick={genre ? closeFilters : openFilters}
        name="genre"
        active={genre}
      >
        <MusicNote />
      </ArtistFilters.IconButton>
      <p>Genre</p>
      <ArtistFilters.IconButton  color="inherit">
        #
      </ArtistFilters.IconButton >
      <p>Most popular tags</p>
    </ArtistFilters.Toolbar>
    { genre ? <Genres /> : null }
    { location ? <Locations /> :null }
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
  && {
    margin     : 0 2% !important;
    background : ${props => (props.active ? '#EAEDF5 !important' : 'transparent !important')};

    &:hover {
      background : #EAEDF5 !important;
    }
  }
`;

ArtistFilters.propTypes = {
  filters      : PropTypes.object.isRequired,
  openFilters  : PropTypes.func.isRequired,
  closeFilters : PropTypes.func.isRequired,
};

const withState = compose(
  withStateHandlers(
    ({
      filters = {
        location : false,
        genre    : false,
      }
    }) => ({ filters }),
    {
      openFilters : state => ({ target }) => {
        const filters = R.assoc(target.name, true, state.filters);
        return ({ filters });
      },
      closeFilters : state => ({ target }) => {
        const filters = R.assoc(target.name, false, state.filters);
        return ({ filters });
      },
    },
  ),
);

export default withState(ArtistFilters);
