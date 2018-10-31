import React       from 'react';
import PropTypes   from 'prop-types';
import styled      from 'styled-components';
import Paper       from '@material-ui/core/Paper';
import { graphql } from 'react-apollo';

import CreateEvent from '../forms/create_event';
import EventsList  from '../components/events_list';
import allMyEvents from '../graphql/allMyEvents';

const MusicianEventsPage = ({ data: { allMyEvents = []} }) => (
  <MusicianEventsPage.Wrapper>
    <MusicianEventsPage.FormWrapper>
      <CreateEvent />
    </MusicianEventsPage.FormWrapper>
    <MusicianEventsPage.TableWrapper>
      <EventsList events={allMyEvents} />
    </MusicianEventsPage.TableWrapper>
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

MusicianEventsPage.TableWrapper = styled(Paper)`
  margin  : 1% 0;
  padding : 2%;
`;

MusicianEventsPage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(allMyEvents)(MusicianEventsPage);
