import React              from 'react';

import { ProfileContext } from '../models/profile_context';

const withProfileData = Component => props => (
  <ProfileContext.Consumer>
    {
      value =>
        <Component {...props} {...value} />
    }
  </ProfileContext.Consumer>
);

export default withProfileData;
