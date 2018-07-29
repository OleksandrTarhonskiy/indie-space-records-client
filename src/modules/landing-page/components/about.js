import React  from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const About = () => (
  <About.Wrapper>
    <About.HeadingWrapper>
      <About.Heading>
        for Funs
      </About.Heading>
    </About.HeadingWrapper>
    <About.Description>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </About.Description>
    <About.Button>
      Sign up as Fan
    </About.Button>
    <About.HeadingWrapper>
      <About.Heading>
        for Musicians
      </About.Heading>
    </About.HeadingWrapper>
    <About.Description>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
     unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </About.Description>
    <About.Button>
      Sign up as Musician
    </About.Button>
  </About.Wrapper>
);

About.Wrapper = styled.div`
  display        : flex;
  padding        : 2%;
  flex-direction : column;
  background     : #EAEDF5;
`;

About.HeadingWrapper = styled.div`
  width : 100%;
`;

About.Heading = styled.h1`
  font-family : 'Pacifico', cursive;
  color       : #EE3C25;
`;

About.Description = styled.p`
  font-family : 'Roboto', sans-serif;
  font-size   : 18px;
  font-weight : 600;
  color       : #3c3c3e;
`;

About.Button = styled(Button)`
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  color      : #fff !important;
  margin-top : 1% !important;
  width      : 20%;
`;

export default About;
