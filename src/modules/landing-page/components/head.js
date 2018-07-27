import React  from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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

Head.Button = styled(Button)`
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  color      : #fff !important;
`;

export default Head;
