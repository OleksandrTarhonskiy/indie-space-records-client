import React          from 'react';
import styled         from 'styled-components';

import UploadSongForm from '../forms/upload_song_form';

const SongUpload = () => (
  <SongUpload.PageWrapper>
    <UploadSongForm />
  </SongUpload.PageWrapper>
);

SongUpload.PageWrapper = styled.div`
  padding : 10%;
`;

export default SongUpload;
