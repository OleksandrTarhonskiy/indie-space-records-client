import React            from 'react';
import styled           from 'styled-components';
import Card             from '@material-ui/core/Card';
import CardContent      from '@material-ui/core/CardContent';
import CardMedia        from '@material-ui/core/CardMedia';
import IconButton       from '@material-ui/core/IconButton';
import Typography       from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon    from '@material-ui/icons/PlayArrow';
import SkipNextIcon     from '@material-ui/icons/SkipNext';

const TopSongs = () => (
  <TopSongs.Wrapper>
    <TopSongs.Card>
      <TopSongs.Details>
        <TopSongs.CardContent>
          <Typography variant="headline">Live From Space</Typography>
          <Typography variant="subheading" color="textSecondary">
            Mac Miller
          </Typography>
        </TopSongs.CardContent>
        <TopSongs.Controls>
          <IconButton aria-label="Previous">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon/>
          </IconButton>
          <IconButton aria-label="Next">
            <SkipNextIcon />
          </IconButton>
        </TopSongs.Controls>
      </TopSongs.Details>
      <TopSongs.CardMedia
        image="https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fb4eae47630c907c8b2a375d42198a1fa.1000x1000x1.jpg"
        title="Live from space album cover"
      />
    </TopSongs.Card>
  </TopSongs.Wrapper>
);

TopSongs.Wrapper = styled.div`
  padding    : 4%;
  background : #EAEDF5;
`;

TopSongs.Card = styled(Card)`
  display : flex;
  width   : 376px;
`;

TopSongs.Details = styled.div`
  display        : flex;
  flex-direction : column;
  width          : 61%;
`;

TopSongs.CardContent = styled(CardContent)`
  flex : 1% 0 auto;
`;

TopSongs.CardMedia = styled(CardMedia)`
  width  : 151px;
  height : 151px;
`;

TopSongs.Controls = styled.div`
  display      : flex;
  align-items  : center;
`;

export default TopSongs;
