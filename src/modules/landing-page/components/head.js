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
    <CustomButton
      text="Get started"
      size="large"
      border={true}
      background="transparent"
    />
  </Head.HeadWrapper>
);

Head.HeadWrapper = styled.div`
  padding    : 10% 5% 10% 5%;
  background : linear-gradient(to right, #723af9, #46aafc);
`;

Head.Heading = styled.h1`
  font-family : 'Roboto', sans-serif;
  font-size   : 45px;
  color       : #eaedf5;
`;

Head.Subheading = styled.h2`
  font-family : 'Roboto', sans-serif;
  font-size   : 35px;
  color       : #eaedf5;
`;

Head.CursiveHeading = styled.h3`
  font-family : 'Pacifico', cursive;
  font-size   : 30px;
  color       : #eaedf5;
`;

export default Head;
