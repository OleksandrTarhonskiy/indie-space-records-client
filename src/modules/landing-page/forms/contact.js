import React      from 'react';
import Button     from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import styled     from 'styled-components';

const ContactForm = () => (
  <ContactForm.ContactForm>
    <ContactForm.HeadLine>
      Contact Form
    </ContactForm.HeadLine>
    <ContactForm.EmailInput
      label="Email"
    />
    <ContactForm.NameInput
      label="Name"
    />
    <ContactForm.TextField
      label="Enter your message"
      multiline="true"
    />
    <ContactForm.Wrapper>
      <ContactForm.Button>
        Submit
      </ContactForm.Button>
    </ContactForm.Wrapper>
  </ContactForm.ContactForm>
);

ContactForm.HeadLine = styled.h1`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 33px;
  text-align  : center;
`;

ContactForm.Button = styled(Button)`
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  color      : #fff !important;
  margin-top : 4% !important;
  width      : 30%;
`;

ContactForm.EmailInput = styled(TextField)`

`;

ContactForm.NameInput = styled(TextField)`

`;

ContactForm.TextField = styled(TextField)`

`;
ContactForm.Wrapper = styled.div`
    display        : flex;
    align-items    : center;
    justify-content: center;
`;

ContactForm.ContactForm = styled.form`
  padding       : 3%;
  display       : flex;
  flex-direction: column;
  width         : 30%
`;

export default ContactForm;
