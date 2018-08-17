import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Tags = () => (
  <Tags.Wrapper>
    <h1>
      tags
    </h1>
  </Tags.Wrapper>
);

Tags.Wrapper = styled.div`
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

export default Tags;
