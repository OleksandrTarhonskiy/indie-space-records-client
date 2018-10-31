import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link }   from 'react-router-dom';
import Button     from '@material-ui/core/Button';

const About = () => (
  <About.Wrapper>
    <About.SubSectionWrapper>
      <About.HeadingWrapper>
        <About.Heading>
          for Funs
        </About.Heading>
      </About.HeadingWrapper>
      <About.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </About.Description>
      <About.ButtonWrapper>
        <About.Button
          component={Link}
          to="/fan/sign_up"
        >
          Sign up as Fan
        </About.Button>
      </About.ButtonWrapper>
    </About.SubSectionWrapper>
    <About.SubSectionWrapper>
      <About.HeadingWrapper>
        <About.Heading>
          for Musicians
        </About.Heading>
      </About.HeadingWrapper>
      <About.Description>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
       since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </About.Description>
      <About.ButtonWrapper>
        <About.Button
          component={Link}
          to="/musician/sign_up"
        >
          Sign up as Musician
        </About.Button>
      </About.ButtonWrapper>
    </About.SubSectionWrapper>
  </About.Wrapper>
);

About.Wrapper = styled.div`
  && {
    display        : flex;
    padding        : 2%;
    flex-direction : column;
    background     : #eaedf5;

    ${breakpoint('md')`
      flex-direction : row;
    `}
  }
`;

About.Button = styled(Button)`
  background : linear-gradient(to right, #723af9, #46aafc);
  color      : #ffff !important;
  margin-top : 1% !important;
`;

About.SubSectionWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  padding        : 2% 4%;
`;

About.ButtonWrapper = styled.div`
  display         : flex;
  justify-content : center;
`;

About.HeadingWrapper = styled.div`
  width : 100%;
`;

About.Heading = styled.h1`
  font-family : 'Pacifico', cursive;
  color       : #ee3c25;
  text-align  : center;
`;

About.Description = styled.p`
  font-family : 'Roboto', sans-serif;
  font-size   : 18px;
  font-weight : 400;
  color       : #3c3c3e;
`;

export default About;
