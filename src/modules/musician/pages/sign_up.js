import React              from 'react';
import styled             from 'styled-components';

import MusicianSignUpForm from '../forms/sign_up_form';

const SignUp = () => (
  <SignUp.Wrapper>
    <MusicianSignUpForm />
  </SignUp.Wrapper>
);

SignUp.Wrapper = styled.div`
  padding         : 5% 15%;
  display         : flex;
  justify-content : center;
`;

export default SignUp;
