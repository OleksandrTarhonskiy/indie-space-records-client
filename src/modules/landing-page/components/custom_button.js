import React     from 'react';
import PropTypes from 'prop-types';
import Button    from '@material-ui/core/Button';
import styled    from 'styled-components';

const CustomButton = ({
  text,
  size,
  border,
  background,
  fontWeight,
  color,
}) => (
  <CustomButton.Button
    size={size}
    background={background}
    border={border}
    fontWeight={fontWeight}
    color={color}
  >
    {text}
  </CustomButton.Button>
);

CustomButton.Button = styled(Button)`
  background  : ${props => props.background? props.background : 'linear-gradient(to right,#723af9,#46aafc)'};
  color       : ${props => props.color? props.color : '#ffff'} !important;
  margin-top  : 1% !important;
  border      : ${props => props.border? '1px solid #EAEDF5' : 'none'} !important;
  font-weight : ${props => props.fontWeight === 'bold'? 600 : 400} !important;
`;

CustomButton.propTypes = {
  background : PropTypes.string,
  text       : PropTypes.string.isRequired,
  size       : PropTypes.string.isRequired,
  border     : PropTypes.bool,
  color      : PropTypes.string,
  fontWeight : PropTypes.string,
};

export default CustomButton;
