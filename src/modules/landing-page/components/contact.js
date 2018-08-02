import React        from 'react';
import styled       from 'styled-components';

import ContactForm  from '../forms/contact_form';

const Contact = () => ( 
  <Contact.Wrapper>
    <ContactForm />
  </Contact.Wrapper>
);

Contact.Wrapper = styled.div`
  width : 100%;
`;

export default Contact;
