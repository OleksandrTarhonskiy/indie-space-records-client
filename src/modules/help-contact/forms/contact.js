import React          from 'react';
import TextField      from '@material-ui/core/TextField';
import styled         from 'styled-components';
import breakpoint     from 'styled-components-breakpoint';

import GradientButton from '../../../layouts/gradient_button';

const Contact = () => (
  <Contact.FormWrapper>
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
    <Contact.ButtonWrapper>
      <GradientButton text="Submit" />
    </Contact.ButtonWrapper>
  </Contact.FormWrapper>
);

Contact.HeadLine = styled.h1`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 33px;
  text-align  : center;
`;

Contact.ButtonWrapper = styled.div`
  display         : flex;
  align-items     : center;
  justify-content : center;
  padding-top     : 1%;
`;

Contact.FormWrapper = styled.form`
  && {
    padding        : 8%;
    display        : flex;
    flex-direction : column;
    width          : 80%;

    ${breakpoint('md')`
      width : 50%
    `}
  }
`;

export default Contact;
