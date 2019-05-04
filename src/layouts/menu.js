import React             from 'react';
import PropTypes         from 'prop-types';
import styled            from 'styled-components';
import Button            from '@material-ui/core/Button';
import Dialog            from '@material-ui/core/Dialog';
import DialogContent     from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle       from '@material-ui/core/DialogTitle';
import Divider           from '@material-ui/core/Divider';
import ListItem          from '@material-ui/core/ListItem';
import List              from '@material-ui/core/List';
import IconButton        from '@material-ui/core/IconButton';
import CloseIcon         from '@material-ui/icons/Close';
import MenuIcon          from '@material-ui/icons/Menu';
import withMobileDialog  from '@material-ui/core/withMobileDialog';
import { Link }          from 'react-router-dom';
import {
  compose,
  withStateHandlers,
}                        from 'recompose';

const Menu = ({
  isOpenMenu,
  isOpenDialog,
  toggleMenu,
  toggleDialog,
  fullScreen,
}) => (
  <div>
    <IconButton color="inherit" aria-label="Menu" onClick={toggleMenu.bind(null, true)}>
      <MenuIcon />
    </IconButton>
    <Menu.MenuWindow
      fullScreen
      open={isOpenMenu}
    >
      <IconButton color="inherit" onClick={toggleMenu.bind(null, false)} aria-label="Close">
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} to="/" onClick={toggleMenu.bind(null, false)}>
          <Menu.Item>Main</Menu.Item>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/" onClick={toggleMenu.bind(null, false)}>
          <Menu.Item>Contact</Menu.Item>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/" onClick={toggleMenu.bind(null, false)}>
          <Menu.Item>Donate</Menu.Item>
        </ListItem>
        <Divider />
        <div onClick={toggleMenu.bind(null, false)}>
          <ListItem button onClick={toggleDialog.bind(null, true)}>
            <Menu.Item>Sign up</Menu.Item>
          </ListItem>
        </div>
        <Divider />
        <ListItem button component={Link} to="/login" onClick={toggleMenu.bind(null, false)}>
          <Menu.Item>Login</Menu.Item>
        </ListItem>
      </List>
    </Menu.MenuWindow>
    <div>
      <Dialog
        open={isOpenDialog}
        fullScreen={fullScreen}
      >
        <Menu.Dialogheader>
          <Menu.CloseDialog color="inherit" aria-label="Menu" onClick={toggleDialog.bind(null, false)}>
            <CloseIcon />
          </Menu.CloseDialog>
          <DialogTitle>
            Sign up for new account
          </DialogTitle>
        </Menu.Dialogheader>
        <Menu.DialogContent>
          <DialogContentText>
            Sale and manage your tracks:
          </DialogContentText>
        </Menu.DialogContent>
        <Menu.Button component={Link} to="/musician" onClick={toggleDialog.bind(null, false)}>
          Sign up as Musician
        </Menu.Button>
        <Menu.DialogContent>
          <DialogContentText>
            Follow your favorite artists and explore the music:
          </DialogContentText>
        </Menu.DialogContent>
        <Menu.Button component={Link} to="/fan/sign_up" onClick={toggleDialog.bind(null, false)}>
          Sign up as fan
        </Menu.Button>
      </Dialog>
    </div>
  </div>
);

Menu.propTypes = {
  isOpenMenu   : PropTypes.bool.isRequired,
  isOpenDialog : PropTypes.bool.isRequired,
  toggleMenu   : PropTypes.func.isRequired,
  toggleDialog : PropTypes.func.isRequired,
  fullScreen   : PropTypes.bool.isRequired,
};

Menu.MenuWindow = styled(Dialog)`
  opacity : 0.9;
`;

Menu.Item = styled.h2`
  font-family : 'Roboto', sans-serif;
  font-size   : 30px;
  color       : #374142;
  font-weight : 300;
`;

Menu.DialogContent = styled(DialogContent)`
  padding         : 5% !important;
  display         : flex;
  justify-content : center;
  font-weight     : 400;
`;

Menu.Dialogheader = styled.div`
  display : flex;
`;

Menu.CloseDialog = styled(IconButton)`
  margin: 3% 1% !important;
`;

Menu.Button = styled(Button)`
  background : linear-gradient(to right, #723af9, #46aafc);
  color      : #ffff !important;
  margin     : 5% !important;
`;

const withState = compose(
  withStateHandlers(
    ({
      isOpenMenu   = false,
      isOpenDialog = false,
    }) => ({ isOpenMenu, isOpenDialog }),
    {
      toggleMenu   : () => isOpenMenu => ({ isOpenMenu }),
      toggleDialog : () => isOpenDialog => ({ isOpenDialog })
    },
  ),
);

export default withState(withMobileDialog()(Menu));
