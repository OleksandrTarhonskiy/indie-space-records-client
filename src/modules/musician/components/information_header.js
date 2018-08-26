import React    from 'react';
import styled   from 'styled-components';
import Button   from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const InformationHeader = () => (
  <InformationHeader.Wrapper>
    <InformationHeader.Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
    </InformationHeader.Text>
    <InformationHeader.Button
      size="large"
      component={Link}
      to="/musician/sign_up"
    >
      Sign up for free
    </InformationHeader.Button>
  </InformationHeader.Wrapper>
);

InformationHeader.Wrapper = styled.div`
  padding     : 10% 5% 10% 5%;
  background  : linear-gradient(to right, #723af9, #46aafc);
  font-family : 'Roboto', sans-serif;
  color       : #ffff !important;
`;

InformationHeader.Text = styled.h1`
  font-weight : 300;
`;

InformationHeader.Button = styled(Button)`
  background : transparent;
  color      : #ffff !important;
  margin-top : 1% !important;
  border     : 1px solid #eaedf5 !important;
`;

export default InformationHeader;
