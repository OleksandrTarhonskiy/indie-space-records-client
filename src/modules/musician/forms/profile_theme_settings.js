import React           from 'react';
import PropTypes       from 'prop-types';
import ColorPicker     from 'material-ui-color-picker';
import * as R          from 'ramda';
import Slider          from '@material-ui/lab/Slider';
import Snackbar        from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InputLabel      from '@material-ui/core/InputLabel';
import MenuItem        from '@material-ui/core/MenuItem';
import Select          from '@material-ui/core/Select';
import FormControl     from '@material-ui/core/FormControl';
import Typography      from '@material-ui/core/Typography';
import styled          from 'styled-components';
import FontPicker      from 'font-picker-react';
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
    firstSection,
    secondSection,
    thirdSection,
    h1FontSize,
    h2FontSize,
    RegularFontSize,
    LinksColor,
    LinksHover,
    MenuLinksPosition,
    activeFont,
  },
  fonts: {
    headlineFont,
    regularTextFont,
    LinksFont,
    subHead,
  },
  handleChange,
  submit,
  errorsList,
  hasError,
  hideAlert,
  sliderChange,
  handleSelectChange,
  handleFontChange,
}) => (
  <div>
    <ColorPicker
      defaultValue={color}
      value={color}
      name="color"
      onChange={handleChange.bind(null, 'color')}
      label="Text color"
      margin="normal"
    />
    <ColorPicker
      defaultValue={LinksColor}
      value={LinksColor}
      name="LinksColor"
      onChange={handleChange.bind(null, 'LinksColor')}
      label="Links color"
      margin="normal"
    />
    <ColorPicker
      defaultValue={LinksHover}
      value={LinksHover}
      name="LinksHover"
      onChange={handleChange.bind(null, 'LinksHover')}
      label="Links hover"
      margin="normal"
    />
    <ColorPicker
      defaultValue={firstSection}
      value={firstSection}
      name="firstSection"
      onChange={handleChange.bind(null, 'firstSection')}
      label="first section background"
      margin="normal"
    />
    <ColorPicker
      defaultValue={secondSection}
      value={secondSection}
      name="color"
      onChange={handleChange.bind(null, 'secondSection')}
      label="second section background"
      margin="normal"
    />
    <ColorPicker
      defaultValue={thirdSection}
      value={thirdSection}
      name="thirdSection"
      onChange={handleChange.bind(null, 'thirdSection')}
      label="third section background"
      margin="normal"
    />
    <ProfileThemeSettings.SelectWrapper>
      <InputLabel htmlFor="MenuLinksPosition">Menu Links Position</InputLabel>
      <Select
        value={MenuLinksPosition || ''}
        onChange={handleSelectChange}
        inputProps={{
          name: 'MenuLinksPosition',
          id: 'MenuLinksPosition',
        }}
      >
        <MenuItem value="center">center</MenuItem>
        <MenuItem value="left">left</MenuItem>
        <MenuItem value="right">right</MenuItem>
      </Select>
    </ProfileThemeSettings.SelectWrapper>
    <ProfileThemeSettings.Label>
      Headings font
    </ProfileThemeSettings.Label>
    <FontPicker
      id="font-picker-headlineFont"
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      activeFont={headlineFont}
      name="headlineFont"
      options={{
        name : 'headlineFont'
      }}
      onChange={handleFontChange.bind(null, 'headlineFont')}
      sort="popularity"
    />
    <ProfileThemeSettings.Label>
      Regular text font
    </ProfileThemeSettings.Label>
    <FontPicker
      id="font-picker-regularTextFont"
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      activeFont={regularTextFont}
      name="regularTextFont"
      options={{
        name : 'regularTextFont'
      }}
      onChange={handleFontChange.bind(null, 'regularTextFont')}
      sort="popularity"
    />
    <ProfileThemeSettings.Label>
      SubHeadline font
    </ProfileThemeSettings.Label>
    <FontPicker
      id="font-picker-subHead"
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      activeFont={subHead}
      name="subHead"
      options={{
        name : 'subHead'
      }}
      onChange={handleFontChange.bind(null, 'subHead')}
      sort="popularity"
    />
    <ProfileThemeSettings.Label>
      Links font
    </ProfileThemeSettings.Label>
    <FontPicker
      id="font-picker-LinksFont"
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      activeFont={LinksFont}
      name="LinksFont"
      options={{
        name : 'LinksFont'
      }}
      onChange={handleFontChange.bind(null, 'LinksFont')}
      sort="popularity"
    />
    <ProfileThemeSettings.SliderWrapper>
      <ProfileThemeSettings.Label>
        Headlines font size: {h1FontSize}px
      </ProfileThemeSettings.Label>
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
    <ProfileThemeSettings.SliderWrapper>
      <ProfileThemeSettings.Label>
        SubHead font size: {h2FontSize}px
      </ProfileThemeSettings.Label>
      <Slider
        value={h2FontSize}
        name="h2FontSize"
        min={10}
        max={60}
        step={1}
        onChange={sliderChange.bind(null, 'h2FontSize')}
        aria-labelledby="label"
      />
    </ProfileThemeSettings.SliderWrapper>
    <ProfileThemeSettings.SliderWrapper>
      <ProfileThemeSettings.Label>
        Regular text font size: {RegularFontSize}px
      </ProfileThemeSettings.Label>
      <Slider
        value={RegularFontSize}
        name="RegularFontSize"
        min={10}
        max={40}
        step={1}
        onChange={sliderChange.bind(null, 'RegularFontSize')}
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

ProfileThemeSettings.Label = styled(Typography)`
  color : #494949 !important;
`;

ProfileThemeSettings.SelectWrapper = styled(FormControl)`
  width : 88%;
`;

const updateThemeMutation = gql`
  mutation($style: String!, $fonts: String!) {
    updateTheme(style: $style, fonts: $fonts) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

ProfileThemeSettings.propTypes = {
  styles             : PropTypes.object.isRequired,
  fonts              : PropTypes.object.isRequired,
  submit             : PropTypes.func.isRequired,
  handleChange       : PropTypes.func.isRequired,
  hideAlert          : PropTypes.func.isRequired,
  hasError           : PropTypes.bool.isRequired,
  errorsList         : PropTypes.array.isRequired,
  sliderChange       : PropTypes.func.isRequired,
  handleSelectChange : PropTypes.func.isRequired,
  handleFontChange   : PropTypes.func.isRequired,
};


const withRecompose = compose(
  graphql(updateThemeMutation),
  withStateHandlers(
    ({
      styles     = {
        color             : '',
        firstSection      : '',
        secondSection     : '',
        thirdSection      : '',
        h1FontSize        : '',
        h2FontSize        : '',
        RegularFontSize   : '',
        LinksColor        : '',
        LinksHover        : '',
        MenuLinksPosition : '',
      },
      fonts      = {
        headlineFont    : '',
        regularTextFont : '',
        LinksFont       : '',
        subHead         : '',
      },
      hasError   = false,
      errorsList = [],
    }) => ({ styles, errorsList, hasError, fonts }),
    {
      handleChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        return ({ styles });
      },

      handleSelectChange : state => ({target}) => {
        const styles = R.assoc(target.name, target.value, state.styles);
        return ({ styles });
      },

      handleFontChange : state => (field, value) => {
        const fonts = R.assoc(field, value.family, state.fonts);
        console.log(value, "**************")
        return ({ fonts });
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
    submit : ({ styles, mutate, errorsList, showAlert, fonts }) => async () => {
      const stringStyles = JSON.stringify(styles);
      const stringFonts = JSON.stringify(fonts);
      const response = await mutate({
        variables: { style : stringStyles, fonts : stringFonts },
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
