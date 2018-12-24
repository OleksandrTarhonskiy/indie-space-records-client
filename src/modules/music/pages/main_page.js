import React from 'react';
import styled              from 'styled-components';
import { Link }       from 'react-router-dom';
import Button         from '@material-ui/core/Button';

const MainPage = () => (
  <MainPage.Wrapper>
    <Button
      variant="contained"
      component={Link}
      to='/upload_song'
    >
      Upload single song
    </Button>
    <Button
      variant="contained"
      component={Link}
      to='/music/all'
    >
      All my music
    </Button>
  </MainPage.Wrapper>
);

MainPage.Wrapper = styled.div`
  padding : 5% 10%;
`;

export default MainPage;
