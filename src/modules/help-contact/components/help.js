import React      from 'react';
import styled     from 'styled-components';
import List       from '@material-ui/core/List';
import ListItem   from '@material-ui/core/ListItem';
import breakpoint from 'styled-components-breakpoint';
import { Link }   from 'react-router-dom';

const Help = () => (
  <Help.Wrapper>
    <h1>
      Indie Records Help
    </h1>

    <h2>
      You are almost certainly wondering:
    </h2>

    <List>
      <ListItem>
        <Help.Link to="/">
          My download is taking forever...
        </Help.Link>
      </ListItem>
      <ListItem>
        <Help.Link to="/">
          My download just isn’t working. What now?
        </Help.Link>
      </ListItem>
      <ListItem>
        <Help.Link to="/">
          My stuff won’t upload! What gives?
        </Help.Link>
      </ListItem>
      <ListItem>
        <Help.Link to="/">
          I’m having trouble playing music on the website.
        </Help.Link>
      </ListItem>
      <ListItem>
        <Help.Link to="/">
          I’m having trouble logging in.
        </Help.Link>
      </ListItem>
      <ListItem>
        <Help.Link to="/">
          Where’s my download email?
        </Help.Link>
      </ListItem>
      <ListItem>
        <Help.Link to="/">
          Something seems broken, can you fix it?
        </Help.Link>
      </ListItem>
    </List>

    <h2>
      That’s not what you’re wondering?
    </h2>

    <List>
      <ListItem>
        <Help.Link to="/">
          Find help here.
        </Help.Link>
      </ListItem>
    </List>
  </Help.Wrapper>
);

Help.Wrapper = styled.div`
  && {
    color          : #565656;
    font-family    : 'Roboto', sans-serif;
    padding        : 3%;
    display        : flex;
    flex-direction : column;
    width          : 90%;

    ${breakpoint('md')`
      width : 50%;
    `}
  }
`;

Help.Link = styled(Link)`
  && {
    color             : inherit;
    text-decoration   : none;

    &:hover {
      text-decoration : underline;
    }
  }
`;

export default Help;
