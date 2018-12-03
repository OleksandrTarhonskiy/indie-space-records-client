import React               from 'react';
import { graphql }         from 'react-apollo';
import CircularProgress    from '@material-ui/core/CircularProgress';
import styled              from 'styled-components';
import { Link }            from 'react-router-dom';

import { allProfilesQuery } from '../graphql/queries';

const allProfilesPage = ({ data: { loading, allProfiles = [] } }) => (
  <allProfilesPage.Wrapper>
    {
      loading?
        <CircularProgress />
        :
        allProfiles.map(profile =>
          <allProfilesPage.Card key={profile.id}>
            <allProfilesPage.PhotoWrapper>
              <img
                src="https://newmusicshelf.com/wp-content/uploads/blank-profile-picture.png"
                heigh="255px"
                width="255px"
                alt={profile.name}
              />
            </allProfilesPage.PhotoWrapper>
            <br />
            <allProfilesPage.DescWrapper>
              <Link to={`/musicians/${profile.id}`}>{profile.name}</Link>
              <p>{profile.genres}</p>
            </allProfilesPage.DescWrapper>
          </allProfilesPage.Card>
        )
    }
  </allProfilesPage.Wrapper>
);

allProfilesPage.Wrapper = styled.div`
  display               : grid;
  grid-template-columns : 32% 32% 32%;
  padding               : 5%;
  text-align            : center;
`;

allProfilesPage.Card = styled.div`
  display        : flex;
  flex-direction : column;
  font-family    : 'Roboto', sans-serif;
  color          : #565656;
`;

allProfilesPage.PhotoWrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : center;
`;

allProfilesPage.DescWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  padding        : 5% 0;
`;

export default graphql(allProfilesQuery)(allProfilesPage);
