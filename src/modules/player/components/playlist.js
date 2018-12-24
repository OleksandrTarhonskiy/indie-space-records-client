import React     from 'react';
import PropTypes from 'prop-types';

import Song      from './song';

const Playlist = ({
  songs,
}) => (
  <div>
    {
      songs.map(song =>
        <div key={song.id}>
          <Song
            song={song}
          />
        </div>
      )
    }
  </div>
);

Playlist.propTypes = {
  songs : PropTypes.array.isRequired,
};

export default Playlist;
