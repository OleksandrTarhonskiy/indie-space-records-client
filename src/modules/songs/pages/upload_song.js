import React      from 'react';
import styled     from 'styled-components';
import Paper      from '@material-ui/core/Paper';

import UploadForm from '../forms/upload_form';

const UploadSong = () => (
  <UploadSong.PageWrapper>
    <UploadSong.FormWrapper>
      <UploadForm />
    </UploadSong.FormWrapper>
  </UploadSong.PageWrapper>
);

UploadSong.FormWrapper = styled(Paper)`
  margin : 2%;
`;

UploadSong.PageWrapper = styled.div`
  background : #eaedf5;
  padding    : 1% 0 1%;
`;

export default UploadSong;
