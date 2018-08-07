import React        from 'react';
import TextField    from '@material-ui/core/TextField';
import styled       from 'styled-components';

import CustomButton from '../components/custom_button';

const SubscribeForm = () => (
  <SubscribeForm.SubscribeForm>
    <SubscribeForm.EmailInput
      label="Email"
    />
    <CustomButton text="Subscribe" />
  </SubscribeForm.SubscribeForm>
);

SubscribeForm.EmailInput = styled(TextField)`
  margin-right : 10px !important;
`;
SubscribeForm.SubscribeForm = styled.form`
  padding : 1% 0;
`;

export default SubscribeForm;
