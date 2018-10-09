import React  from 'react';
import styled from 'styled-components';
import Paper  from '@material-ui/core/Paper';

const MusicianEventsPage = () => (
  <MusicianEventsPage.Wrapper>
    <Paper>
      404
    </Paper>
  </MusicianEventsPage.Wrapper>
);

MusicianEventsPage.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  width          : 100%;
  background     : #eaedf5;
`;

export default MusicianEventsPage;
