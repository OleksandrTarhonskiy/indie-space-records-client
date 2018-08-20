import React    from 'react';
import styled   from 'styled-components';
import { Link } from 'react-router-dom';

import { TAGS } from '../.././landing-page/fake-db';

const Tags = () => (
  <Tags.Wrapper>
    <h1>
      tags
    </h1>
    <Tags.TagsWrapper>
      { TAGS.map(tag => (
          <Tags.title key={tag.id}>
            <Link to={`/search/${tag.name}`}>
              #{tag.name}
            </Link>
          </Tags.title>
        )
      )}
    </Tags.TagsWrapper>
  </Tags.Wrapper>
);

Tags.Wrapper = styled.div`
  color          : #565656;
  font-family    : 'Roboto', sans-serif;
  padding        : 5%;
  display        : flex;
  flex-direction : column;
  width          : 90%;
`;

Tags.title = styled.p`
  margin-right : 1%;
  float        : left;
`;

Tags.TagsWrapper = styled.div`
  display : block;
`;

export default Tags;
