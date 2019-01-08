import React                 from 'react';
import PropTypes             from 'prop-types';
import { withRouter }        from 'react-router';
import { graphql }           from 'react-apollo';
import { compose }           from 'recompose';
import CircularProgress      from '@material-ui/core/CircularProgress';

import { fetchProfileQuery } from '../graphql/queries';
import Profile               from '../components/profile';

const ProfilePage = ({
  match: {
    params: {
      id
    }
  },
  data: {
    loading,
    fetchProfile = {}
  },
  myId,
}) => (
  <React.Fragment>
    {
      loading ?
      <CircularProgress />
      :
      <Profile profile={fetchProfile} />
    }
  </React.Fragment>
);

ProfilePage.propTypes = {
  match : PropTypes.object.isRequired,
  data  : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(fetchProfileQuery, {
    options: (props) => ({
      variables: {
        profileId: props.myId || props.match.params.id
      }
    })
  }),
);

export default withRecompose(ProfilePage);
