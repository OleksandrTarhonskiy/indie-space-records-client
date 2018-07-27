import React   from 'react';
import styled  from 'styled-components';

const Footer = () => (
  <Footer.Wrapper>
    <Footer.Container>
       Footer
    </Footer.Container>
  </Footer.Wrapper>
);

Footer.Wrapper = styled.div`
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  width      : 100%;
  position   : absolute;
`;

Footer.Container = styled.div`
  padding : 5% 4%;
`;

export default Footer;
