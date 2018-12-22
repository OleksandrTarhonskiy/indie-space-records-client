import React               from 'react';
import { graphql }         from 'react-apollo';
import styled              from 'styled-components';

import { allMySongsQuery } from '../graphql/queries';

const AllMySongs = ({
  data: {
    loading,
    allMySongs = []
  }
}) => (
  <AllMySongs.Wrapper>
  {
    allMySongs.map(s =>
      <audio controls key={s.id}>
        <source src={'http://localhost:8080/' + s.url} type={s.filetype} />
      </audio>
    )
  }
  </AllMySongs.Wrapper>
);

AllMySongs.Wrapper = styled.div`
  padding : 10%;
`;

export default graphql(allMySongsQuery)(AllMySongs);
