import React                   from 'react';
import styled                  from 'styled-components';
import breakpoint              from 'styled-components-breakpoint';
import TextField               from '@material-ui/core/TextField';
import Radio                   from '@material-ui/core/Radio';
import RadioGroup              from '@material-ui/core/RadioGroup';
import FormControlLabel        from '@material-ui/core/FormControlLabel';
import FormControl             from '@material-ui/core/FormControl';
import FormLabel               from '@material-ui/core/FormLabel';
import { DatePicker }          from 'material-ui-pickers';
import DateFnsUtils            from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import * as R                  from 'ramda';
import moment                  from 'moment';
import {
  compose,
  withStateHandlers,
}                              from 'recompose';
import { graphql }             from 'react-apollo';

import GradientButton          from '../../../layouts/gradient_button';
import FileUpload              from '../components/file_upload';
import { RADIO_BUTTONS }       from '../models/radio-buttons';
import { uploadSongMutation }  from '../graphql/mutations';

const UploadForm = ({
  currency,
  form: {
    name,
    price,
    release,
    pricingType,
  },
  handleChange,
  handleFieldChange,
}) => (
  <FileUpload.Form>
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
            value={name}
            onChange={handleChange}
            fullWidth
          />
        </UploadForm.InputWrapper>
        <MuiPickersUtilsProvider utils={DateFnsUtils} moment={moment}>
          <DatePicker
            keyboard
            label="Release date"
            minDate={Date.now()}
            value={release}
            format="yyyy-MM-dd"
            onChange={handleFieldChange.bind(null, 'release')}
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
          Pricing
        </UploadForm.Headline>
        <UploadForm.InputWrapper>
          <TextField
            label="Price"
            value={price}
            name="price"
            type="number"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            disabled={pricingType === 'free'}
          />
          <FileUpload.CurrencyWrapper>
            {currency}
          </FileUpload.CurrencyWrapper>
        </UploadForm.InputWrapper>
        <FormControl component="fieldset">
          <FormLabel component="legend">Pricing type</FormLabel>
          <RadioGroup
            aria-label="Pricing type"
            name="pricingType"
            value={pricingType}
            onChange={handleChange}
          >
            {
              RADIO_BUTTONS.map(item =>
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio color="primary" />}
                  label={item.label}
                />
              )
            }
          </RadioGroup>
        </FormControl>
      </UploadForm.SectionWrapper>
    </FileUpload.Wrapper>
    <GradientButton
      text={'Save & upload'}
    />
  </FileUpload.Form>
);

FileUpload.Form = styled.form`
  padding : 4%;
`;

FileUpload.Wrapper = styled.div`
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

const withRecompose = compose(
  graphql(uploadSongMutation),
  withStateHandlers(
    ({
      form = {
        name        : '',
        price       : '',
        release     : (new Date()).toString(),
        pricingType : 'free',
      },
    }) => ({ form }),
    {
      handleChange      : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },

      handleFieldChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({ form });
      },
    },
  ),
);

export default withRecompose(UploadForm);
