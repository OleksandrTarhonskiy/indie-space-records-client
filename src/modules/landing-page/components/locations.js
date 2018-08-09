import React  from 'react';
import styled from 'styled-components';

const Locations = () => (
  <Locations.GenreListWprapper>
    Portland, Toronto, London
  </Locations.GenreListWprapper>
);

Locations.GenreListWprapper = styled.div`
  position   : relative;
  padding    : 3%;
  background : #eaedf5;
  font-size  : 18px;
`;

export default Locations;
