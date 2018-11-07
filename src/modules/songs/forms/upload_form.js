import React                   from 'react';
import styled                  from 'styled-components';
import breakpoint              from 'styled-components-breakpoint';
import TextField               from '@material-ui/core/TextField';
import { DatePicker }          from 'material-ui-pickers';
import DateFnsUtils            from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import moment                  from 'moment';

import GradientButton          from '../../../layouts/gradient_button';
import FileUpload              from '../components/file_upload';

const UploadForm = ({ currency }) => (
  <FileUpload.Wrapper>
    <UploadForm.SectionWrapper>
      <UploadForm.Headline>
        About Track
      </UploadForm.Headline>
      <UploadForm.InputWrapper>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          margin="normal"
          value=""
          fullWidth
        />
      </UploadForm.InputWrapper>
      <MuiPickersUtilsProvider utils={DateFnsUtils} moment={moment}>
        <DatePicker
          keyboard
          label="Release date"
          minDate={Date.now()}
          value="01/12/2019"
          format="yyyy-MM-dd"
          disableOpenOnEnter
        />
      </MuiPickersUtilsProvider>
      <br />
      <FileUpload>
        <GradientButton
          text={'choose file'}
        />
      </FileUpload>
    </UploadForm.SectionWrapper>
    <UploadForm.SectionWrapper>
      <UploadForm.Headline>
        Price
      </UploadForm.Headline>
      <UploadForm.InputWrapper>
        <TextField
          label="Price"
          value={0}
          name="price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <FileUpload.CurrencyWrapper>
          {currency}
        </FileUpload.CurrencyWrapper>
      </UploadForm.InputWrapper>
    </UploadForm.SectionWrapper>
  </FileUpload.Wrapper>
);

FileUpload.Wrapper = styled.form`
  && {
    display        : flex;
    flex-direction : column;

    ${breakpoint('md')`
      flex-direction : row;
    `}
  }
`;

UploadForm.SectionWrapper = styled.div`
  && {
    width   : 100%;
    padding : 4%;

    ${breakpoint('md')`
      width : 50%;
    `}
  }
`;

UploadForm.Headline = styled.h2`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 35px;
  font-weight : 400;
`;

UploadForm.InputWrapper = styled.div`
  width   : 45%;
  display : flex;
`;

FileUpload.CurrencyWrapper = styled.div`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 20px;
  padding     : 13% 5%;
`;

export default UploadForm;
