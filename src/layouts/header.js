import React      from 'react';
import styled     from 'styled-components';
import AppBar     from '@material-ui/core/AppBar';
import Toolbar    from '@material-ui/core/Toolbar';

import MenuBar    from './menu';

const Header = () => (
  <Header.MenuBar>
    <Header.Toolbar>
      <Header.ToolbarItem>
        Menu
      </Header.ToolbarItem>
      <MenuBar />
    </Header.Toolbar>
  </Header.MenuBar>
);

Header.MenuBar = styled(AppBar)`
  display : flex;
  widht   : 100%;
  background: linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
`;

Header.Toolbar = styled(Toolbar)`
  flex-direction  : row;
  justify-content : flex-end;
`;

Header.ToolbarItem = styled.h2`
  font-family: 'Pacifico', cursive;
`;

export default Header;
