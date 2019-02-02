import React                             from 'react';
import PropTypes                         from 'prop-types';
import { compose }                       from 'recompose';
import { withRouter }                    from 'react-router';
import { graphql }                       from 'react-apollo';
import CircularProgress                  from '@material-ui/core/CircularProgress';
import { Helmet }                        from 'react-helmet';

import { profileThemeWithSectionsQuery } from '../graphql/queries';
import FullEventsList                    from '../components/full_events_list';

const ProfileEventsPage = ({
  match: {
    params: {
      id
    }
  },
  data: {
    loading,
    fetchProfile = {}
  },
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <React.Fragment>
          <Helmet>
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).regularTextFont}`} rel="stylesheet" />
          </Helmet>
          <FullEventsList
            profile={fetchProfile}
            id={id}
          />
        </React.Fragment>
    }
  </React.Fragment>
);

ProfileEventsPage.propTypes = {
  data  : PropTypes.object.isRequired,
  match : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(profileThemeWithSectionsQuery, {
    options: (props) => ({
      variables: {
        profileId: props.match.params.id
      }
    })
  }),
);

export default withRecompose(ProfileEventsPage);
