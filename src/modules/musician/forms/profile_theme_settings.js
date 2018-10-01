import React           from 'react';
import PropTypes       from 'prop-types';
import ColorPicker     from 'material-ui-color-picker';
import * as R          from 'ramda';
import Slider          from '@material-ui/lab/Slider';
import Snackbar        from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography      from '@material-ui/core/Typography';
import styled          from 'styled-components';
import WarningIcon     from '@material-ui/icons/Warning';
import DoneIcon        from '@material-ui/icons/Done';
import {
  compose,
  withStateHandlers,
  withHandlers
}                      from 'recompose';
import {
  gql,
  graphql
}                      from 'react-apollo';

import GradientButton  from '../../../layouts/gradient_button';

const ProfileThemeSettings = ({
  styles: {
    color,
    backgroundColor,
    h1FontSize,
  },
  handleChange,
  submit,
  errorsList,
  hasError,
  hideAlert,
  sliderChange,
}) => (
  <div>
    <ColorPicker
      defaultValue={color}
      value={color}
      name="color"
      onChange={handleChange.bind(null, 'color')}
      label="Font color"
      margin="normal"
    />
    <ColorPicker
      defaultValue={backgroundColor}
      value={backgroundColor}
      name="backgroundColor"
      label="Site Background Color"
      onChange={handleChange.bind(null, 'backgroundColor')}
      margin="normal"
    />
    <ProfileThemeSettings.SliderWrapper>
      <Typography id="label">Headlines font size</Typography>
      <Slider
        value={h1FontSize}
        name="h1FontSize"
        min={10}
        max={80}
        step={1}
        onChange={sliderChange.bind(null, 'h1FontSize')}
        aria-labelledby="label"
      />
    </ProfileThemeSettings.SliderWrapper>
    <br />
    <GradientButton
      text={'Update this section'}
      onClick={submit}
    />
    <Snackbar
      open={hasError}
      autoHideDuration={2000}
      onClose={hideAlert}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <ProfileThemeSettings.Alert
        message={
          errorsList.length > 0 ?
            errorsList.map((err, index) => <p key={index}><WarningIcon /> {err}</p>)
            :
            <p><DoneIcon /> successfully updated</p>
        }
      />
    </Snackbar>
  </div>
);

ProfileThemeSettings.Alert = styled(SnackbarContent)`
  background-color : ${props => props.message ? '#59d859' : '#ee3c25'} !important;
  font-family      : 'Roboto', sans-serif;
`;

ProfileThemeSettings.SliderWrapper = styled.div`
  width      : 80%
  height     : 15%;
  margin-top : 20px;
`;

const updateThemeMutation = gql`
  mutation($style: String!) {
    updateTheme(style: $style) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

ProfileThemeSettings.propTypes = {
  styles       : PropTypes.object.isRequired,
  submit       : PropTypes.func.isRequired,
  handleChange : PropTypes.func.isRequired,
  hideAlert    : PropTypes.func.isRequired,
  hasError     : PropTypes.bool.isRequired,
  errorsList   : PropTypes.array.isRequired,
};


const withRecompose = compose(
  graphql(updateThemeMutation),
  withStateHandlers(
    ({
      styles     = {
        color           : '',
        backgroundColor : '',
        h1FontSize      : '',
      },
      hasError   = false,
      errorsList = [],
    }) => ({ styles, errorsList, hasError }),
    {
      handleChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        return ({ styles });
      },

      sliderChange : state => (field, event, value) => {
        const styles = R.assoc(field, value, state.styles);
        return ({ styles });
      },

      showAlert      : () => () => ({ hasError: true }),
      hideAlert      : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    submit : ({ styles, mutate, errorsList, showAlert }) => async () => {
      const stringStyles = JSON.stringify(styles);
      const response = await mutate({
        variables: { style : stringStyles },
      });

      const { ok, errors } = response.data.updateTheme;

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

export default withRecompose(ProfileThemeSettings);
