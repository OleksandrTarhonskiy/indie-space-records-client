import React     from 'react';
import styled    from 'styled-components';

import Player    from './player';
import { SONGS } from '../fake-db'

const TopSongs = () => (
  <TopSongs.Wrapper>
  {
    SONGS.map(song => (
      <Player
        key={song.id}
        song={song}
      />
   ))
  }
  </TopSongs.Wrapper>
);

TopSongs.Wrapper = styled.div`
  padding    : 4%;
  background : #EAEDF5;
`;

export default TopSongs;
