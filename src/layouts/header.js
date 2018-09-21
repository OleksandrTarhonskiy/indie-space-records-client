import React         from 'react';
import PropTypes     from 'prop-types';
import styled        from 'styled-components';
import * as R        from 'ramda';
import breakpoint    from 'styled-components-breakpoint';
import AppBar        from '@material-ui/core/AppBar';
import Toolbar       from '@material-ui/core/Toolbar';
import {
  compose,
  withStateHandlers,
  lifecycle
}                    from 'recompose';
import { Link }      from 'react-router-dom';

import MenuBar       from './menu';
import Logo          from './theme/logo.png';
import Mobile        from './theme/mobile-logo.png';
import decode        from 'jwt-decode';

let name = '';
const token = localStorage.getItem('token');

try {
  const { user } = decode(token);
  name = user.name;
} catch (err) {
  null;
}

const Header = ({
  style: {
    position,
  },
}) => (
  <Header.MenuBar position={position}>
    <Header.LogoWrapper to="/" />
    <Header.Toolbar>
      {
        token ?
          <Header.UserWrapper>
            <Header.UserLink to="/logout">
            logout
            </Header.UserLink>
            <Header.UserLink to="/musician/profile">
            Hello, {name}
            </Header.UserLink>
          </Header.UserWrapper>
          :
          null
      }
      <Header.ToolbarItem>
        Menu
      </Header.ToolbarItem>
      <MenuBar />
    </Header.Toolbar>
  </Header.MenuBar>
);

Header.UserWrapper = styled.div`
  display : flex;
  width   : 30%;
`;

Header.LogoWrapper = styled(Link)`
  && {
    background         : url(${Mobile}) no-repeat;
    background-size    : 80px 80px;
    height             : 91px;
    width              : 60%;
    margin-top         : 3px;
    outline            : 0;

    ${breakpoint('md')`
      background      : url(${Logo}) no-repeat;
      background-size : 270px 90px;
      width           : 20%;
    `}
  }
`;

Header.UserLink = styled(Link)`
  margin-right    : 2%;
  font-family     : 'Roboto', sans-serif;
  text-decoration : none;
  color           : #ffff;
  outline         : none;
  font-size       : 18px;
`;

Header.MenuBar = styled(AppBar)`
  display        : flex;
  height         : 70px;
  flex-direction : row !important;
  background     : linear-gradient(to right, #723af9, #46aafc) !important;
  box-shadow     : none !important;
  padding        : 0 25px 0 25px;
  position       : ${props => props.position};
`;

Header.Toolbar = styled(Toolbar)`
  justify-content : flex-end;
  width           : 80%;
`;

Header.ToolbarItem = styled.h2`
  font-family : 'Pacifico', cursive;
`;

Header.propTypes = {
  style : PropTypes.object.isRequired,
};

const withState = compose(
  withStateHandlers(
    ({
      style = {
        position : 'relative',
      }
    }) => ({ style }),
    {
      onScroll : state => () => {
        let style = null;
        if (window.scrollY > 650) {
          style = R.assoc('position', 'fixed', state.position);
        } else {
          style = R.assoc('position', 'relative', state.position);
        }
        return ({style});
      },
    },
  ),
  lifecycle({
    componentDidMount() {
      const { onScroll } = this.props;
      window.addEventListener('scroll', onScroll);
    },
    componentWillUnmount() {
      const { onScroll } = this.props;
      return window.removeEventListener('scroll', onScroll);
    },
  })
);

export default withState(Header);
