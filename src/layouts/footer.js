import React           from 'react';
import styled          from 'styled-components';
import { FaFacebook }  from 'react-icons/lib/fa';
import { FaTwitter }   from 'react-icons/lib/fa';
import { FaInstagram } from 'react-icons/lib/fa';
import IconButton      from '@material-ui/core/IconButton';

const Footer = () => (
  <Footer.Wrapper>
    <Footer.Container>
      <Footer.Copirated>
        <p>© 2018 Indie space records</p>
      </Footer.Copirated>
      <Footer.SocialIcons>
        <IconButton>
          <FaFacebook
            color="#e9ecf5"
            size="1.3em"
          />
        </IconButton>
        <IconButton>
          <FaTwitter
            color="#e9ecf5"
            size="1.3em"
          />
        </IconButton>
        <IconButton>
          <FaInstagram
            color="#e9ecf5"
            size="1.3em"
          />
        </IconButton>
      </Footer.SocialIcons>
    </Footer.Container>
  </Footer.Wrapper>
);

Footer.Wrapper = styled.div`
  background  : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  width       : 100%;
  font-family : 'Roboto', sans-serif;
  font-size   : 16px;
  color       : #e9ecf5;
`;

Footer.Container = styled.div`
  padding        : 1% 7%;
  flex-direction : row;
  display        : flex;
`;

Footer.Copirated = styled.div `
  width : 50%;
`;

Footer.SocialIcons = styled.div`
  flex-direction  : row;
  display         : flex;
  justify-content : flex-end;
  width           : 50%;
`;

export default Footer;
