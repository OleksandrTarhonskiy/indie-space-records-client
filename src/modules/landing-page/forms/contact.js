import React      from 'react';
import Button     from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import styled     from 'styled-components';

const ContactForm = () => (
  <ContactForm.ContactForm>
    <ContactForm.EmailInput
      label="Email"
    />
    <ContactForm.NameInput
      label="Name"
    />
    <ContactForm.Button>
      Submit
    </ContactForm.Button>
  </ContactForm.ContactForm>
);

ContactForm.Button = styled(Button)`
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  color      : #fff !important;
  margin-top : 1% !important;
`;

ContactForm.EmailInput = styled(TextField)`
  margin-right : 10px !important;
`;
ContactForm.NameInput = styled(TextField)`
  margin-right : 10px !important;
`;
ContactForm.ContactForm = styled.form`
  padding : 1% 0;
`;

export default ContactForm;
