import React               from 'react';
import PropTypes           from 'prop-types';
import decode              from 'jwt-decode';
import styled              from 'styled-components';
import { graphql }         from 'react-apollo';

import MusicianProfileForm from '../forms/musician_profile_form';
import ProfileFeatures     from '../components/profile_features';
import AboutProfile        from '../components/about_profile';
import CircularProgress    from '@material-ui/core/CircularProgress';
import { myProfilesQuery } from '../graphql/queries';

const token = localStorage.getItem('token');
let hasProfile = '';

try {
  const { user } = decode(token);
  hasProfile = user.hasProfile;
} catch (err) {
  null;
}

const MusicianProfilePage = ({ data: { loading, myProfile = {} } }) => (
  <div>
    {
      hasProfile ?
        <MusicianProfilePage.ProfileWrapper background={true}>
          <ProfileFeatures />
          {
            loading?
              <CircularProgress />
              :
              <AboutProfile
                key={myProfile.id}
                profile={myProfile}
              />
          }
        </MusicianProfilePage.ProfileWrapper>
        :
        <MusicianProfilePage.FormWrapper background={false}>
          <MusicianProfileForm />
        </MusicianProfilePage.FormWrapper>
    }
  </div>
);

MusicianProfilePage.FormWrapper = styled.div`
  padding         : 15% 15%;
  display         : flex;
  justify-content : center;
`;

MusicianProfilePage.ProfileWrapper = styled.div`
  display        : flex;
  flex-direction : row;
  width          : 100%;
  background     : ${props => props.background ? '#eaedf5' : 'transparent'};
`;

MusicianProfilePage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(myProfilesQuery)(MusicianProfilePage);
