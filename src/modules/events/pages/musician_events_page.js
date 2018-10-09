import React       from 'react';
import styled      from 'styled-components';
import Paper       from '@material-ui/core/Paper';

import CreateEvent from '../forms/create_event'

const MusicianEventsPage = () => (
  <MusicianEventsPage.Wrapper>
    <MusicianEventsPage.FormWrapper>
      <CreateEvent />
    </MusicianEventsPage.FormWrapper>
  </MusicianEventsPage.Wrapper>
);

MusicianEventsPage.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  width          : 100%;
  background     : #eaedf5;
`;

MusicianEventsPage.FormWrapper = styled(Paper)`
  margin  : 1%;
  padding : 2%;
`;

export default MusicianEventsPage;
