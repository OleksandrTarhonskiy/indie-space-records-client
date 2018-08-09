import React      from 'react';
import TextField  from '@material-ui/core/TextField';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import CustomButton from '../components/custom_button';

const ContactForm = () => (
  <ContactForm.ContactForm>
    <ContactForm.HeadLine>
      Contact Form
    </ContactForm.HeadLine>
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
    <ContactForm.Wrapper>
      <CustomButton text="Submit" />
    </ContactForm.Wrapper>
  </ContactForm.ContactForm>
);

ContactForm.HeadLine = styled.h1`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 33px;
  text-align  : center;
`;

ContactForm.Wrapper = styled.div`
  display         : flex;
  align-items     : center;
  justify-content : center;
`;

ContactForm.ContactForm = styled.form`
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

export default ContactForm;
