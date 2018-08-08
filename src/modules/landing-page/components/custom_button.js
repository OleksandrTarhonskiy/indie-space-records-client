import React     from 'react';
import PropTypes from 'prop-types';
import Button    from '@material-ui/core/Button';
import styled    from 'styled-components';

const CustomButton = ({
  text,
  size,
  border,
  color,
}) => (
  <CustomButton.Button
    size={size}
    color={color}
    border={border}
  >
    {text}
  </CustomButton.Button>
);

CustomButton.Button = styled(Button)`
  background : ${props => props.color? props.color : 'linear-gradient(to right,#723af9,#46aafc)'};
  color      : #fff !important;
  margin-top : 1% !important;
  border     : ${props => props.border? '1px solid #EAEDF5' : 'none'} !important;
`;

CustomButton.propTypes = {
  text   : PropTypes.string.isRequired,
  size   : PropTypes.string.isRequired,
  border : PropTypes.bool,
  color  : PropTypes.string,
};

export default CustomButton;
