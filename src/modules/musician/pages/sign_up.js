import React              from 'react';
import styled             from 'styled-components';

import MusicianSignUpForm from '../forms/sign_up_form';

const MusicianSignUp = () => (
  <MusicianSignUp.Wrapper>
    <MusicianSignUpForm />
  </MusicianSignUp.Wrapper>
);

MusicianSignUp.Wrapper = styled.div`
  padding         : 5% 15%;
  display         : flex;
  justify-content : center;
`;

export default MusicianSignUp;
