import React  from 'react';
import Paper  from '@material-ui/core/Paper';
import styled from 'styled-components';

const AboutProfile = () => (
  <AboutProfile.Wrapper>
    about
  </AboutProfile.Wrapper>
);

AboutProfile.Wrapper = styled(Paper)`
  margin : 1% 0;
  width  : 80%;
`;

export default AboutProfile;
