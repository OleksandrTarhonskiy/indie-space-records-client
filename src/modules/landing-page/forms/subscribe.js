import React          from 'react';
import TextField      from '@material-ui/core/TextField';
import styled         from 'styled-components';

import GradientButton from '../../../layouts/gradient_button';

const SubscribeForm = () => (
  <SubscribeForm.SubscribeForm>
    <SubscribeForm.EmailInput
      label="Email"
    />
    <GradientButton text="Subscribe" size="small" />
  </SubscribeForm.SubscribeForm>
);

SubscribeForm.EmailInput = styled(TextField)`
  margin-right : 10px !important;
`;
SubscribeForm.SubscribeForm = styled.form`
  padding : 1% 0;
`;

export default SubscribeForm;
