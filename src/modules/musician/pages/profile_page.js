import React          from 'react';
import { withRouter } from 'react-router';

import ProfileWrapper from './profile_wrapper';

const ProfilePage = ({
  match: {
    params: {
      id
    }
  },
}) => (
  <ProfileWrapper id={id} />
);

export default withRouter(ProfilePage);
