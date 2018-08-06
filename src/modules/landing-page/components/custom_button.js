import React      from 'react';
import PropTypes  from 'prop-types';
import Button     from '@material-ui/core/Button';
import breakpoint from 'styled-components-breakpoint';
import styled     from 'styled-components';

const CustomButton = ({
  text,
}) => (
  <CustomButton.Button>
    {text}
  </CustomButton.Button>
);

CustomButton.Button = styled(Button)`
&& {
  background : linear-gradient(135deg, #4923b2 2%,#284dd3 58%,#207cca 100%,#7db9e8 100%);
  color      : #fff !important;
  margin-top : 1% !important;
  width      : 100%;

  ${breakpoint('md')`
    width : 20%;
  `}
}
`;

CustomButton.propTypes = {
  text : PropTypes.string.isRequired,
};

export default CustomButton;
