import React     from 'react';
import styled    from 'styled-components';

import EditEvent from '../forms/edit_event';

const EditEventPage = () => (
  <EditEventPage.PageWrapper >
    <EditEvent />
  </EditEventPage.PageWrapper >
);

EditEventPage.PageWrapper = styled.div`
  padding     : 5% 10%;
  dispay      : flex;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

export default EditEventPage;
