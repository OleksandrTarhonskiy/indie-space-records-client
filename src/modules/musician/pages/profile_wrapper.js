import React                 from 'react';
import { graphql }           from 'react-apollo';
import CircularProgress      from '@material-ui/core/CircularProgress';

import { fetchProfileQuery } from '../graphql/queries';
import Profile               from '../components/profile';

const ProfileWrapper = ({
  data: { loading, fetchProfile = {} },
  id,
}) => {
  return(
    <div>
      {
        loading?
          <CircularProgress />
          :
          <div>
          {console.log(fetchProfile)}
          <Profile myProfile={fetchProfile} />
          </div>
      }
    </div>
  );
};

export default graphql(fetchProfileQuery, {
  options: (ownProps) => ({
    variables: {
      profileId: ownProps.id
    }
  })
})(ProfileWrapper);
