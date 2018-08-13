import React        from 'react';
import styled       from 'styled-components';
import Button       from '@material-ui/core/Button';

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
    <Head.Button>
      Get started
    </Head.Button>
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

Head.Button = styled(Button)`
  background : transparent;
  color      : #ffff !important;
  margin-top : 1% !important;
  border     : 1px solid #eaedf5 !important;
`;

export default Head;
