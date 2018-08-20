import React     from 'react';
import PropTypes from 'prop-types';
import Button    from '@material-ui/core/Button';
import styled    from 'styled-components';

const GradientButton = ({
  text,
  size,
  onClick,
  disabled,
}) => (
  <GradientButton.Button
    size={size}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </GradientButton.Button>
);

GradientButton.Button = styled(Button)`
  background : ${props => props.disabled ? 'gray' : 'linear-gradient(to right, #723af9, #46aafc)'};
  color      : ${props => props.disabled ? '#cfc7bf' : '#ffff'} !important;
  margin-top : 1% !important;
`;

GradientButton.propTypes = {
  text     : PropTypes.string.isRequired,
  size     : PropTypes.string,
  onClick  : PropTypes.func,
  disabled : PropTypes.bool,
};

export default GradientButton;
