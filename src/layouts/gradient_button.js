import React     from 'react';
import PropTypes from 'prop-types';
import Button    from '@material-ui/core/Button';
import styled    from 'styled-components';

const GradientButton = ({
  text,
  size,
  onClick,
}) => (
  <GradientButton.Button size={size} onClick={onClick}>
    {text}
  </GradientButton.Button>
);

GradientButton.Button = styled(Button)`
  background : linear-gradient(to right, #723af9, #46aafc);
  color      : #ffff !important;
  margin-top : 1% !important;
`;

GradientButton.propTypes = {
  text    : PropTypes.string.isRequired,
  size    : PropTypes.string,
  onClick : PropTypes.func.isRequired,
};

export default GradientButton;
