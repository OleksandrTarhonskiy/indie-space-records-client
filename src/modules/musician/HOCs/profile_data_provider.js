import React                          from 'react';
import PropTypes                      from 'prop-types';
import { graphql }                    from 'react-apollo';
import { compose }                    from 'recompose';
import { withRouter }                 from 'react-router';
import CircularProgress               from '@material-ui/core/CircularProgress';

import { ProfileContext }             from '../models/profile_context';
import { myProfileWithSectionsQuery } from '../graphql/queries';

const ProfileDataProvider = ({
  data: {
    loading,
    myProfile = {},
  },
  children,
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <ProfileContext.Provider value={{ profile : { myProfile } }}>
          {children}
        </ProfileContext.Provider>
    }
  </React.Fragment>
);

const withRecompose = compose(
  withRouter,
  graphql(myProfileWithSectionsQuery),
);

ProfileDataProvider.propTypes = {
  data     : PropTypes.object.isRequired,
  children : PropTypes.node,
};

export default withRecompose(ProfileDataProvider);
