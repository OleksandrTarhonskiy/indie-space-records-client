import React          from 'react';
import PropTypes      from 'prop-types';
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

ProfilePage.propTypes = {
  match : PropTypes.object.isRequired,
};

export default withRouter(ProfilePage);
