import React        from 'react';
import styled       from 'styled-components';

import CustomButton from './custom_button';

const Head = () => (
  <Head.HeadWrapper>
    <Head.Heading>
      Lorem Ipsum is simply dummy text
    </Head.Heading>
    <Head.Subheading>
      Lorem Ipsum is simply dummy text
    </Head.Subheading>
    <Head.CursiveHeading>
      Lorem Ipsum is simply dummy text
    </Head.CursiveHeading>
    <CustomButton text="Get started" />
  </Head.HeadWrapper>
);

Head.HeadWrapper = styled.div`
  padding : 10% 5% 10% 5%;
`;

Head.Heading = styled.h1`
  font-family : 'Roboto', sans-serif;
  font-size   : 45px;
  color       : #3c3c3e;
`;

Head.Subheading = styled.h2`
  font-family : 'Roboto', sans-serif;
  font-size   : 35px;
  color       : #3c3c3e;
`;

Head.CursiveHeading = styled.h3`
  font-family : 'Pacifico', cursive;
  font-size   : 30px;
  color       : #3c3c3e;
`;

export default Head;
