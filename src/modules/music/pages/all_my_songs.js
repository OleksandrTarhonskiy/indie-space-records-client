import React               from 'react';
import { graphql }         from 'react-apollo';
import styled              from 'styled-components';

import { allMySongsQuery } from '../graphql/queries';
import Playlist            from '../../player/components/playlist';

const AllMySongs = ({
  data: {
    loading,
    allMySongs = []
  }
}) => (
  <AllMySongs.Wrapper>
    <Playlist songs={allMySongs} />
  </AllMySongs.Wrapper>
);

AllMySongs.Wrapper = styled.div`
  padding : 10%;
`;

export default graphql(allMySongsQuery)(AllMySongs);
