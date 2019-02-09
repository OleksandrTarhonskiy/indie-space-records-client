import React             from 'react';

import FullEventsList    from '../components/full_events_list';
import WithHeaderWrapper from '../components/with_header_wrapper';

const ProfileEventsPage = () => (
  <WithHeaderWrapper>
    <FullEventsList />
  </WithHeaderWrapper>
);

export default ProfileEventsPage;
