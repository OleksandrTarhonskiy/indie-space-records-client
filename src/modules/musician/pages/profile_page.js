import React                 from 'react';

import Sections              from '../components/sections';
import WithHeaderWrapper     from '../components/with_header_wrapper';

const ProfilePage = () => (
  <React.Fragment>
    <WithHeaderWrapper>
      <Sections />
    </WithHeaderWrapper>
  </React.Fragment>
);

export default ProfilePage;
