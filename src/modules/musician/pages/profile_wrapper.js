import React                 from 'react';
import PropTypes             from 'prop-types';
import { graphql }           from 'react-apollo';
import CircularProgress      from '@material-ui/core/CircularProgress';

import { fetchProfileQuery } from '../graphql/queries';
import Profile               from '../components/profile';

const ProfileWrapper = ({
  data: {
    loading,
    fetchProfile = {}
  },
}) => {
  return(
    <div>
      {
        loading?
          <CircularProgress />
          :
          <Profile profile={fetchProfile} />
      }
    </div>
  );
};

ProfileWrapper.propTypes = {
  data : PropTypes.object.isRequired,
  id   : PropTypes.number.isRequired,
};

export default graphql(fetchProfileQuery, {
  options: (ownProps) => ({
    variables: {
      profileId: ownProps.id
    }
  })
})(ProfileWrapper);
