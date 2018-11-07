import React                from 'react';
import styled               from 'styled-components';
import Paper                from '@material-ui/core/Paper';
import { graphql }          from 'react-apollo';
import { compose }          from 'recompose';

import UploadForm           from '../forms/upload_form';
import { getCurrencyQuery } from '../../musician/graphql/queries';

const UploadSong = ({
  data: {
    myProfile = {},
  },
}) => (
  <UploadSong.PageWrapper>
    <UploadSong.FormWrapper>
      <UploadForm currency={myProfile.currency} />
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

const withRecompose = compose(
  graphql(getCurrencyQuery),
);

export default withRecompose(UploadSong);
