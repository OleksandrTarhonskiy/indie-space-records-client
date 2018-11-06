import React      from 'react';
import styled     from 'styled-components';

import UploadForm from '../forms/upload_form';

const Upload = () => (
  <Upload.PageWrapper>
    <UploadForm />
  </Upload.PageWrapper>
);

Upload.PageWrapper = styled.div`
  padding : 10%;
`;

export default Upload;
