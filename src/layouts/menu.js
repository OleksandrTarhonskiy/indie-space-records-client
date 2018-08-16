import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';
import Dialog     from '@material-ui/core/Dialog';
import Divider    from '@material-ui/core/Divider';
import ListItem   from '@material-ui/core/ListItem';
import List       from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon  from '@material-ui/icons/Close';
import MenuIcon   from '@material-ui/icons/Menu';
import { Link }   from 'react-router-dom';
import {
  compose,
  withStateHandlers,
}                 from 'recompose';


const Menu = ({
  isOpen,
  toggleMenu,
}) => (
  <div>
    <IconButton color="inherit" aria-label="Menu" onClick={toggleMenu.bind(null, true)}>
      <MenuIcon />
    </IconButton>
    <Menu.MenuWindow
      fullScreen
      open={isOpen}
    >
      <IconButton color="inherit" onClick={toggleMenu.bind(null, false)} aria-label="Close">
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} to="/">
          <Menu.Item>About</Menu.Item>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/">
          <Menu.Item>Contact</Menu.Item>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/">
          <Menu.Item>Donate</Menu.Item>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/">
          <Menu.Item>Sign up</Menu.Item>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/">
          <Menu.Item>Login</Menu.Item>
        </ListItem>
        <ListItem button  component={Link} to="/help_contact">
          <Menu.Item>Help</Menu.Item>
        </ListItem>
      </List>
    </Menu.MenuWindow>
  </div>
);

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

Menu.MenuWindow = styled(Dialog)`
  opacity : 0.9;
`;

Menu.Item = styled.h2`
  font-family : 'Roboto', sans-serif;
  font-size   : 30px;
  color       : #374142;
`;

Menu.Link = styled(Link)`
  text-decoration: none;
`;
const withState = compose(
  withStateHandlers(
    ({
      isOpen = false,
    }) => ({ isOpen }),
    {
      toggleMenu : () => isOpen => ({ isOpen })
    },
  ),
);

export default withState(Menu);
