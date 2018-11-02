import React                       from 'react';
import PropTypes                   from 'prop-types';
import styled                      from 'styled-components';
import { graphql }                 from 'react-apollo';
import CircularProgress            from '@material-ui/core/CircularProgress';

import ProfileFeatures             from '../components/profile_features';
import AboutProfile                from '../components/about_profile';
import { myProfileWithThemeQuery } from '../graphql/queries';

const MusicianProfileDetails = ({ data: { loading, myProfile = {} } }) => (
  <div>
    <MusicianProfileDetails.ProfileWrapper>
      <ProfileFeatures myProfile={myProfile} />
      {
        loading?
          <CircularProgress />
          :
          <AboutProfile
            key={myProfile.id}
            profile={myProfile}
          />
      }
    </MusicianProfileDetails.ProfileWrapper>
  </div>
);

MusicianProfileDetails.ProfileWrapper = styled.div`
  display        : flex;
  flex-direction : row;
  width          : 100%;
  background     : #eaedf5;
`;

MusicianProfileDetails.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(myProfileWithThemeQuery)(MusicianProfileDetails);
