import React         from 'react';
import styled        from 'styled-components';

import FanSignUpForm from '../forms/sign_up_form';

const FanSignUp = () => (
  <FanSignUp.Wrapper>
    <FanSignUpForm />
  </FanSignUp.Wrapper>
);

FanSignUp.Wrapper = styled.div`
  padding         : 5% 15%;
  display         : flex;
  justify-content : center;
`;

export default FanSignUp;
