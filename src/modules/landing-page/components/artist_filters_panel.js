import React        from 'react';
import * as R       from 'ramda';
import styled       from 'styled-components';
import PropTypes    from 'prop-types';
import IconButton   from '@material-ui/core/IconButton';
import Headset      from '@material-ui/icons/Headset';
import LocationIcon from '@material-ui/icons/LocationOn';
import MusicNote    from '@material-ui/icons/MusicNote';
import Toolbar      from '@material-ui/core/Toolbar';
import breakpoint   from 'styled-components-breakpoint';

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
  toggleFilters,
}) => (
  <ArtistFilters.SubSectionWrapper>
    <ArtistFilters.Toolbar>
      <ArtistFilters.Heading>
        Filters:
      </ArtistFilters.Heading>
      <ArtistFilters.IconButton color="inherit">
        <Headset />
      </ArtistFilters.IconButton >
      <ArtistFilters.Item>
        listenings
      </ArtistFilters.Item>
      <ArtistFilters.IconButton
        color="inherit"
        onClick={location ? toggleFilters.bind(null, 'location', false) : toggleFilters.bind(null, 'location', true)}
        active={location}
      >
        <LocationIcon />
      </ArtistFilters.IconButton >
      <ArtistFilters.Item>Location</ArtistFilters.Item>
      <ArtistFilters.IconButton
        color="inherit"
        onClick={genre ? toggleFilters.bind(null, 'genre', false) : toggleFilters.bind(null, 'genre', true)}
        active={genre}
      >
        <MusicNote />
      </ArtistFilters.IconButton>
      <ArtistFilters.Item>
        Genre
      </ArtistFilters.Item>
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
  font-size   : 20px;
  font-weight : 400;
`;

ArtistFilters.Toolbar = styled(Toolbar)`
  && {
    display        : flex;
    flex-direction : column;

    ${breakpoint('md')`
      flex-direction : row;
    `}
  }
`;

ArtistFilters.Item = styled.p`
  font-weight : 500;
`;

ArtistFilters.IconButton = styled(IconButton)`
  && {
    margin     : 0 2% !important;
    background : ${props => (props.active ? '#EAEDF5 !important' : 'transparent !important')};

    &:hover {
      background : #eaedf5 !important;
    }
  }
`;

ArtistFilters.propTypes = {
  filters       : PropTypes.object.isRequired,
  toggleFilters : PropTypes.func.isRequired,
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
      toggleFilters : state => (name, value) => {
        const filters = R.assoc(name, value, state.filters);
        return ({ filters });
      },
    },
  ),
);

export default withState(ArtistFilters);
