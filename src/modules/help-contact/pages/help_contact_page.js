import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Contact    from '../forms/contact';
import Help       from '../components/help';

const HelpContactPage = () => (
  <HelpContactPage.Wrapper>
    <Contact />
    <Help />
  </HelpContactPage.Wrapper>
);

HelpContactPage.Wrapper = styled.div`
  && {
    display        : flex;
    flex-direction : column;

    ${breakpoint('md')`
      flex-direction : row;
    `}
  }
`;

export default HelpContactPage;
