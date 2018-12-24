import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';
import IconButton       from '@material-ui/core/IconButton';
import PlayArrowIcon    from '@material-ui/icons/PlayArrow';
import Pause            from '@material-ui/icons/Pause';
import Restore          from '@material-ui/icons/Restore';
import Slider           from '@material-ui/lab/Slider';
import {
  compose,
  withStateHandlers,
}                       from 'recompose';

const Song = ({
  song: {
    id,
    name,
    url,
    filetype,
  },
  play,
  togglePlay,
  toggleRepeat,
  repeat,
}) => (
  <Song.SongWrapper>
    <IconButton aria-label="Play/pause"
      onClick={play ? togglePlay.bind(null, false, id) : togglePlay.bind(null, true, id)}
    >
      {play ? <Pause /> : <PlayArrowIcon />}
    </IconButton>
    <Song.Name>
      {name}
    </Song.Name>
    <Song.Repeat
      onClick={repeat ? toggleRepeat.bind(null, false) : toggleRepeat.bind(null, true)}
      repeat={repeat}
    />
    <Song.Volume>
      <Slider
        value={100}
        name="volume"
        min={0}
        max={100}
        step={10}
      />
    </Song.Volume>
    <audio id={id} loop={repeat}>
      <source src={'http://localhost:8080/' + url} type={filetype} />
    </audio>
  </Song.SongWrapper>
);

Song.SongWrapper = styled.div`
  display        : flex;
  flex-direction : row;
  color          : #565656;
  font-family    : 'Roboto', sans-serif;
  border         : #ecebeb 1px solid;
  padding        : 1%;
`;

Song.Name = styled.p`
  font-size : 18px;
  margin    : 15px 70px;
`;

Song.Repeat = styled(Restore)`
  color  : ${ props => props.repeat ? '#6271C2' : '#565656' };
  cursor : pointer;
  margin : 12px;
`;

Song.Volume = styled.div`
  width  : 75px;
  margin : 10px;
`;

Song.propTypes = {
  song         : PropTypes.object.isRequired,
  play         : PropTypes.bool.isRequired,
  repeat       : PropTypes.bool.isRequired,
  togglePlay   : PropTypes.func.isRequired,
  toggleRepeat : PropTypes.func.isRequired,
};

const withState = compose(
  withStateHandlers(
    ({
      play   = false,
      songId = '',
      repeat = false,
    }) => ({ play, songId, repeat}),
    {
      togglePlay  : () => (play, songId) => {
        const audio = document.getElementById(songId);
        if (play) {
          audio.play();
        } else {
          audio.pause();
        }
        return ({ play });
      },

      toggleRepeat : () => (repeat) => ({ repeat })
    },
  ),
);

export default withState(Song);
