import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { TAGS }   from '../.././landing-page/fake-db';

const Tags = () => (
  <Tags.Wrapper>
    <h1>
      tags
    </h1>
    <Tags.TagsWrapper>
      { TAGS.map((tag, index) => (
        <Tags.all key={index}>
          {tag}
        </Tags.all>
      )
    )}
    </Tags.TagsWrapper>
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

Tags.all = styled.p`
  color: red
`;

Tags.TagsWrapper = styled.div`
  display        : flex;
  flex-direction : row;
`;

export default Tags;
