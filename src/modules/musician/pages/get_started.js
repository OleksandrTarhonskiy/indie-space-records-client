import React               from 'react';
import styled              from 'styled-components';

import MusicianProfileForm from '../forms/musician_profile_form'

const GetStarted = () => (
  <GetStarted.Wrapper>
    <MusicianProfileForm />
  </GetStarted.Wrapper>
);

GetStarted.Wrapper = styled.div`
  padding         : 5% 15%;
  display         : flex;
  justify-content : center;
`;


export default GetStarted;
