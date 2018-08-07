import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import AppBar     from '@material-ui/core/AppBar';
import Toolbar    from '@material-ui/core/Toolbar';

import MenuBar    from './menu';
import Logo       from './theme/logo.png';
import Mobile     from './theme/mobile-logo.png';

const Header = () => (
  <Header.MenuBar>
    <Header.LogoWrapper />
    <Header.Toolbar>
      <Header.ToolbarItem>
        Menu
      </Header.ToolbarItem>
      <MenuBar />
    </Header.Toolbar>
  </Header.MenuBar>
);

Header.LogoWrapper = styled.div`
  && {
    background      : url(${Mobile}) no-repeat;
    background-size : 80px 80px;
    height          : 100px;
    width           : 40%;
    margin-top      : 3px;

    ${breakpoint('md')`
      background      : url(${Logo}) no-repeat;
      background-size : 270px 90px;
      width           : 40%;
    `}
  }
`;

Header.MenuBar = styled(AppBar)`
  display         : flex;
  height          : 70px;
  flex-direction  : row !important;
  background      : linear-gradient(to right,#723af9,#46aafc);
  padding         : 0 25px 0 25px;
`;

Header.Toolbar = styled(Toolbar)`
  justify-content : flex-end;
  width           : 60%;
`;

Header.ToolbarItem = styled.h2`
  font-family : 'Pacifico', cursive;
`;

export default Header;
