import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';
import Card             from '@material-ui/core/Card';
import CardContent      from '@material-ui/core/CardContent';
import CardMedia        from '@material-ui/core/CardMedia';
import IconButton       from '@material-ui/core/IconButton';
import Typography       from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon    from '@material-ui/icons/PlayArrow';
import Pause            from '@material-ui/icons/Pause';
import SkipNextIcon     from '@material-ui/icons/SkipNext';
import {
  compose,
  withStateHandlers,
}                       from 'recompose';

const Player = ({
  play,
  togglePlay,
  song,
}) => (
  <Player.Card>
    <Player.Details>
      <Player.CardContent>
        <Typography variant="headline">{song.name}</Typography>
        <Typography variant="subheading" color="textSecondary">
          {song.author}
        </Typography>
      </Player.CardContent>
      <Player.Controls>
        <IconButton aria-label="Previous">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton aria-label="Play/pause"
          onClick={play ? togglePlay.bind(null, false, song.id) : togglePlay.bind(null, true, song.id)}
        >
          {play ? <Pause /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton aria-label="Next">
          <SkipNextIcon />
        </IconButton>
      </Player.Controls>
    </Player.Details>
    <Player.CardMedia
      image={song.image}
      title={song.name}
    />
    <audio id={song.id}>
      <source src={song.url} />
    </audio>
  </Player.Card>

);

Player.Card = styled(Card)`
  display : flex;
  width   : 376px;
  margin  : 1%;
`;

Player.Details = styled.div`
  display        : flex;
  flex-direction : column;
  width          : 61%;
`;

Player.CardContent = styled(CardContent)`
  flex : 1% 0 auto;
`;

Player.CardMedia = styled(CardMedia)`
  width  : 151px;
  height : 151px;
`;

Player.Controls = styled.div`
  display      : flex;
  align-items  : center;
`;

Player.propTypes = {
  play       : PropTypes.bool.isRequired,
  songId     : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  togglePlay : PropTypes.func.isRequired,
  song       : PropTypes.object.isRequired,
};

const withState = compose(
  withStateHandlers(
    ({
      play   = false,
      songId = '',
    }) => ({ play, songId }),
    {
      togglePlay : () => (play, songId) => {
        const audio = document.getElementById(songId);
        if (play) {
          audio.play();
        } else {
          audio.pause();
        }
        return ({ play });
      },
    },
  ),
);

export default withState(Player);
