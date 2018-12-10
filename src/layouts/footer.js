import React           from 'react';
import styled          from 'styled-components';
import { FaFacebook }  from 'react-icons/lib/fa';
import { FaTwitter }   from 'react-icons/lib/fa';
import { FaInstagram } from 'react-icons/lib/fa';
import IconButton      from '@material-ui/core/IconButton';
import { withRouter }  from 'react-router-dom';

const Footer = ({ location }) => (
  <Footer.Wrapper location={location}>
    <Footer.Container>
      <Footer.Copyright>
        <p>© 2018 Indie space records</p>
      </Footer.Copyright>
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
  background  : linear-gradient(to right, #723af9, #46aafc);
  width       : 100%;
  font-family : 'Roboto', sans-serif;
  font-size   : 16px;
  color       : #e9ecf5;
  display     : ${props => props.location.pathname.includes('/musicians/') ? 'none' : 'block'};
`;

Footer.Container = styled.div`
  padding        : 1% 7%;
  flex-direction : row;
  display        : flex;
`;

Footer.Copyright = styled.div `
  width : 50%;
`;

Footer.SocialIcons = styled.div`
  flex-direction  : row;
  display         : flex;
  justify-content : flex-end;
  width           : 50%;
`;

export default withRouter(Footer);
