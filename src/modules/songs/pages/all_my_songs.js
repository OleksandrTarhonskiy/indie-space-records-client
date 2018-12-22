import React               from 'react';
import { graphql }         from 'react-apollo';

import { allMySongsQuery } from '../graphql/queries';

const AllMySongs = ({
  data: {
    loading,
    allMySongs = []
  }
}) => (
  <div style={{padding: 20}}>
  {
    allMySongs.map(s =>
      <audio controls key={s.id}>
        <source src={'http://localhost:8080/' + s.url} type={s.filetype} />
      </audio>
    )
  }
  </div>
);

export default graphql(allMySongsQuery)(AllMySongs);
