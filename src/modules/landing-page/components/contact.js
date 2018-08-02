import React           from 'react';
import ContactForm     from '../forms/contact';
import styled          from 'styled-components';


const Contact = () => ( 
  <Contact.Wrapper>
    <ContactForm />
  </Contact.Wrapper>
);

Contact.Wrapper = styled.div`
  width :100%;
`;

export default Contact;
