import React from 'react';
import { graphql }         from 'react-apollo';
import CircularProgress    from '@material-ui/core/CircularProgress';
import { Link }            from 'react-router-dom';

import { allProfilesQuery } from '../graphql/queries';

const allProfilesPage = ({ data: { loading, allProfiles = [] } }) => (
  <div>
    {
      loading?
      <CircularProgress />
      :
      allProfiles.map(profile =>
        <div key={profile.id}>
          <Link to={`/musician/${profile.id}`}>{profile.name}</Link>
        </div>
      )
    }
  </div>
);

export default graphql(allProfilesQuery)(allProfilesPage);
