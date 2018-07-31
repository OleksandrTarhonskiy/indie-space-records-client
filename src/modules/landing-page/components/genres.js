import React  from 'react';
import styled from 'styled-components';

const Genres = () => (
  <Genres.GenreListWprapper>
    indie-rock, dream-pop, trip-hop, alternative
  </Genres.GenreListWprapper>
);

Genres.GenreListWprapper = styled.div`
  position : relative;
`;

export default Genres;
