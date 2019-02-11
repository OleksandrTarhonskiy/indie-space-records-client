import React                 from 'react';
import PropTypes             from 'prop-types';
import { graphql }           from 'react-apollo';
import { compose }           from 'recompose';
import { withRouter }        from 'react-router';
import CircularProgress      from '@material-ui/core/CircularProgress';

import { ProfileContext }    from '../models/profile_context';
import { fetchProfileQuery } from '../graphql/queries';

const ThemeProvider = ({
  data: {
    loading,
    fetchProfile = {},
  },
  children,
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <ProfileContext.Provider value={fetchProfile}>
          {children}
        </ProfileContext.Provider>
    }
  </React.Fragment>
);

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

ThemeProvider.propTypes = {
  data     : PropTypes.object.isRequired,
  children : PropTypes.node,
};

export default withRecompose(ThemeProvider);
