import React      from 'react';
import Button     from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import styled     from 'styled-components';

const SubscribeForm = () => (
  <SubscribeForm.SubscribeForm>
    <SubscribeForm.EmailInput
      label="Email"
    />
    <SubscribeForm.Button>
      Subscribe
    </SubscribeForm.Button>
  </SubscribeForm.SubscribeForm>
);

SubscribeForm.Button = styled(Button)`
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  color      : #fff !important;
  margin-top : 1% !important;
`;

SubscribeForm.EmailInput = styled(TextField)`
  margin-right : 10px !important;
`;
SubscribeForm.SubscribeForm = styled.form`
  padding : 1% 0;
`;

export default SubscribeForm;
