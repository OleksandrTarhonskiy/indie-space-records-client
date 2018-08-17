import React      from 'react';
import styled     from 'styled-components';

import Tags       from '../components/tags';

const AllTagsPage = () => (
  <AllTagsPage.Wrapper>
    <Tags />
  </AllTagsPage.Wrapper>
);

AllTagsPage.Wrapper = styled.div`
    display        : flex;
    flex-direction : column;
  }
`;

export default AllTagsPage;
