import React               from 'react';
import PropTypes           from 'prop-types';
import { graphql }         from 'react-apollo';
import styled              from 'styled-components';
import CircularProgress    from '@material-ui/core/CircularProgress';

import { allMySongsQuery } from '../graphql/queries';
import Playlist            from '../../player/components/playlist';

const AllMySongs = ({
  data: {
    loading,
    allMySongs = []
  }
}) => (
  <AllMySongs.Wrapper>
    {
      loading ?
        <CircularProgress />
        :
        <Playlist songs={allMySongs} />
    }
  </AllMySongs.Wrapper>
);

AllMySongs.Wrapper = styled.div`
  padding : 10%;
`;

AllMySongs.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(allMySongsQuery)(AllMySongs);
