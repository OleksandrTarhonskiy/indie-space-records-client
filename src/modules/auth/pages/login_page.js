import React     from 'react';
import styled    from 'styled-components';

import LoginForm from '../forms/login_form';

const LoginPage = () => (
  <LoginPage.Wrapper>
    <LoginForm />
  </LoginPage.Wrapper>
);

LoginPage.Wrapper = styled.div`
  padding         : 10% 15%;
  display         : flex;
  justify-content : center;
`;

export default LoginPage;
