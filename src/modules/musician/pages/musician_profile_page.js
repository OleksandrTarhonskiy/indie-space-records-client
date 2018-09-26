import React               from 'react';
import decode              from 'jwt-decode';
import styled              from 'styled-components';

import MusicianProfileForm from '../forms/musician_profile_form';
import ProfileFeatures     from '../components/profile_features';

const token = localStorage.getItem('token');
let hasProfile = '';

try {
  const { user } = decode(token);
  hasProfile = user.hasProfile;
} catch (err) {
  null;
}

const MusicianProfilePage = () => (
  <div>
    {
      hasProfile ?
        <MusicianProfilePage.ProfileWrapper>
          <ProfileFeatures />

        </MusicianProfilePage.ProfileWrapper>
        :
        <MusicianProfilePage.FormWrapper>
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
`;

export default MusicianProfilePage;
