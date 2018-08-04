import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Player     from './player';
import { SONGS }  from '../fake-db';

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
  && {
    display        : flex;
    padding        : 4% 8%;
    background     : #EAEDF5;
    flex-direction : column;

    ${breakpoint('md')`
      display               : grid;
      grid-template-columns : 35% 35% 35%;
    `}
  }
`;

export default TopSongs;
