import React                   from 'react';
import PropTypes               from 'prop-types';
import styled                  from 'styled-components';
import breakpoint              from 'styled-components-breakpoint';
import Button                  from '@material-ui/core/Button';
import CloudUploadIcon         from '@material-ui/icons/CloudUpload';
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
import Dropzone                from 'react-dropzone';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                              from 'recompose';
import { graphql }             from 'react-apollo';

import GradientButton          from '../../../layouts/gradient_button';
import { RADIO_BUTTONS }       from '../models/radio-buttons';
import { uploadSongMutation }  from '../graphql/mutations';
import Alert                   from '../../../layouts/alert';

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
  disableClick,
  upload,
  handleFileUpload,
  hasError,
  errorsList,
  hideAlert,
}) => (
  <UploadForm.Form>
    <UploadForm.Wrapper>
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
        <Dropzone
          className="ignore"
          name="file"
          onDrop={handleFileUpload.bind(null, 'file')}
          disableClick={disableClick}
        >
          <UploadForm.Button variant="contained">
            <CloudUploadIcon />
            choose the file
          </UploadForm.Button>
        </Dropzone>
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
          <UploadForm.CurrencyWrapper>
            {currency}
          </UploadForm.CurrencyWrapper>
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
    </UploadForm.Wrapper>
    <GradientButton onClick={upload}>
      Save & upload
    </GradientButton>
    <Alert
      action="uploaded"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </UploadForm.Form>
);

UploadForm.Form = styled.form`
  padding : 4%;
`;

UploadForm.Wrapper = styled.div`
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

UploadForm.CurrencyWrapper = styled.div`
  color       : #565656;
  font-family : 'Roboto', sans-serif;
  font-size   : 20px;
  padding     : 13% 5%;
`;

UploadForm.Button = styled(Button)`
  margin-top : 10px !important;
`;

UploadForm.propTypes = {
  form              : PropTypes.object.isRequired,
  handleChange      : PropTypes.func.isRequired,
  handleFieldChange : PropTypes.func.isRequired,
  handleFileUpload  : PropTypes.func.isRequired,
  currency          : PropTypes.string,
  upload            : PropTypes.func.isRequired,
  hideAlert         : PropTypes.func.isRequired,
  errorsList        : PropTypes.array.isRequired,
  hasError          : PropTypes.bool.isRequired,
};

const withRecompose = compose(
  graphql(uploadSongMutation),
  withStateHandlers(
    ({
      form       = {
        name        : '',
        price       : 0,
        release     : (new Date()).toString(),
        pricingType : 'free',
        file        : null,
      },
      hasError   = false,
      errorsList = [],
    }) => ({ form, hasError, errorsList}),
    {
      handleChange      : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },

      handleFieldChange : state => (field, value) => {
        const form = R.assoc(field, value, state.form);
        return ({ form });
      },

      handleFileUpload : state => (field, [value]) => {
        const form = R.assoc(field, value, state.form);
        return ({ form });
      },

      showAlert        : () => () => ({ hasError: true }),
      hideAlert        : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    upload : ({
      mutate,
      form,
      errorsList,
      showAlert,
    }) => async () => {
      const response = await mutate({
        variables: form
      });

      const { ok, errors } = response.data.uploadSong;

      if (ok) {
        showAlert();
      } else {
        let messageText = null;
        errors.map((msg) => messageText = msg.message);

        if (!errorsList.includes(messageText)) {
          errorsList.push(messageText);
        }

        showAlert();
        errorsList.pop();
      }
    },
  })
);

export default withRecompose(UploadForm);
