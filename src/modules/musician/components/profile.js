import React           from 'react';
import { graphql }     from 'react-apollo';
import gql             from 'graphql-tag';

import Template        from './template'

const Profile = ({ data: { allProfiles = []} }) => (
  <div>
    {
      allProfiles.map(profile =>
        <Template
          key={profile.id}
          name={profile.name}
          genres={profile.genres}
          templates={profile.templates}
        />
      )
    }
  </div>
);

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      templates {
        id
        links
        typographyColor
        background
      }
    }
  }
`;

export default graphql(allProfilesQuery)(Profile);
