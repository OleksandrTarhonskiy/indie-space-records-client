import React          from 'react';
import TextField      from '@material-ui/core/TextField';
import styled         from 'styled-components';
import breakpoint     from 'styled-components-breakpoint';

import GradientButton from '../../../layouts/gradient_button';

const Contact = () => (
  <Contact.Contact>
    <Contact.HeadLine>
      Have any qestions?
    </Contact.HeadLine>
    <TextField
      label="Email"
    />
    <TextField
      label="Name"
    />
    <TextField
      label="Enter your message"
      multiline="true"
    />
    <Contact.Wrapper>
      <GradientButton text="Submit" />
    </Contact.Wrapper>
  </Contact.Contact>
);

Contact.HeadLine = styled.h1`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 33px;
  text-align  : center;
`;

Contact.Wrapper = styled.div`
  display         : flex;
  align-items     : center;
  justify-content : center;
`;

Contact.Contact = styled.form`
  && {
    padding        : 3%;
    display        : flex;
    flex-direction : column;
    width          : 94%;

    ${breakpoint('md')`
      width : 30%
    `}
  }
`;

export default Contact;
