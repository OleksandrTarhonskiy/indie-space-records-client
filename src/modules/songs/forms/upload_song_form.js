import React          from 'react';

import FileUpload     from '../components/file_upload';
import GradientButton from '../../../layouts/gradient_button';

const UploadSongForm = () => (
  <FileUpload>
    <GradientButton
      text={'Upload'}
    />
  </FileUpload>
);

export default UploadSongForm;
