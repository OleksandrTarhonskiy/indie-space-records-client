import React               from 'react';
import decode              from 'jwt-decode';
import styled              from 'styled-components';

import MusicianProfileForm from '../forms/musician_profile_form';
import Profile             from '../components/profile';

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
        <Profile />
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

export default MusicianProfilePage;
