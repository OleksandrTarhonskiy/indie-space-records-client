import React                   from 'react';
import PropTypes               from 'prop-types';
import ColorPicker             from 'material-ui-color-picker';
import * as R                  from 'ramda';
import Slider                  from '@material-ui/lab/Slider';
import InputLabel              from '@material-ui/core/InputLabel';
import MenuItem                from '@material-ui/core/MenuItem';
import Select                  from '@material-ui/core/Select';
import Radio                   from '@material-ui/core/Radio';
import RadioGroup              from '@material-ui/core/RadioGroup';
import FormControlLabel        from '@material-ui/core/FormControlLabel';
import FormControl             from '@material-ui/core/FormControl';
import Typography              from '@material-ui/core/Typography';
import styled                  from 'styled-components';
import FontPicker              from 'font-picker-react';
import {
  compose,
  withStateHandlers,
}                              from 'recompose';
import { graphql }             from 'react-apollo';

import { updateThemeMutation } from '../graphql/mutations';

const ProfileThemeSettings = ({
  styles: {
    h1FontSize,
    h2FontSize,
    RegularFontSize,
    LinksColor,
    LinksHover,
    MenuLinksPosition,
    headerBackground,
    buttonsBackground,
    buttonsColor,
    borderRadius,
  },
  fonts: {
    headlineFont,
    regularTextFont,
    linksFont,
    subHead,
  },
  handleChange,
  errorsList,
  hasError,
  hideAlert,
  sliderChange,
  handleSelectChange,
  handleFontChange,
  backgroundType: {
    transparent,
  },
  handleRadioChange,
}) => (
  <div>
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
      defaultValue={headerBackground}
      value={headerBackground}
      name="headerBackground"
      onChange={handleChange.bind(null, 'headerBackground')}
      label="header background"
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
      /*jshint ignore:start*/
      /*eslint-disable*/
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      /*eslint-enable*/
      /*jshint ignore:end*/
      activeFont={headlineFont}
      name="headlineFont"
      onChange={handleFontChange.bind(null, 'headlineFont')}
    />
    <ProfileThemeSettings.Label>
      Regular text font
    </ProfileThemeSettings.Label>
    <FontPicker
      /*jshint ignore:start*/
      /*eslint-disable*/
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      /*eslint-enable*/
      /*jshint ignore:end*/
      activeFont={regularTextFont}
      name="regularTextFont"
      onChange={handleFontChange.bind(null, 'regularTextFont')}
    />
    <ProfileThemeSettings.Label>
      SubHeadline font
    </ProfileThemeSettings.Label>
    <FontPicker
      /*jshint ignore:start*/
      /*eslint-disable*/
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      /*eslint-enable*/
      /*jshint ignore:end*/
      activeFont={subHead}
      name="subHead"
      onChange={handleFontChange.bind(null, 'subHead')}
    />
    <ProfileThemeSettings.Label>
      links & Buttons Font
    </ProfileThemeSettings.Label>
    <FontPicker
      /*jshint ignore:start*/
      /*eslint-disable*/
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      /*eslint-enable*/
      /*jshint ignore:end*/
      activeFont={linksFont}
      name="linksFont"
      onChange={handleFontChange.bind(null, 'linksFont')}
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
    <p>Buttons settings</p>
    <FormControl component="fieldset">
      <Typography>Transparent?</Typography>
      <RadioGroup
        name="transparent"
        onChange={handleRadioChange}
        value={String(transparent)}
      >
        <FormControlLabel
          value="true"
          control={<Radio color="primary" />}
          label="transparent"
        />
        <FormControlLabel
          value="false"
          control={<Radio color="primary" />}
          label="colored"
        />
      </RadioGroup>
    </FormControl>
    {
      JSON.parse(transparent) ?
      null
      :
      <ColorPicker
        defaultValue={buttonsBackground}
        value={buttonsBackground}
        name="buttonsBackground"
        onChange={handleChange.bind(null, 'buttonsBackground')}
        label="Buttons background"
        margin="normal"
      />
    }
    <ColorPicker
      defaultValue={buttonsColor}
      value={buttonsColor}
      name="buttonsColor"
      onChange={handleChange.bind(null, 'buttonsColor')}
      label="Buttons text color"
      margin="normal"
    />
    <ProfileThemeSettings.SliderWrapper>
      <ProfileThemeSettings.Label>
        Button border radius: {borderRadius}%
      </ProfileThemeSettings.Label>
      <Slider
        value={borderRadius}
        name="borderRadius"
        min={0}
        max={50}
        step={1}
        onChange={sliderChange.bind(null, 'borderRadius')}
        aria-labelledby="label"
      />
    </ProfileThemeSettings.SliderWrapper>
  </div>
);

ProfileThemeSettings.SliderWrapper = styled.div`
  width      : 80%;
  height     : 60px;
  margin-top : 20px;
`;

ProfileThemeSettings.Label = styled(Typography)`
  color : #494949 !important;
`;

ProfileThemeSettings.SelectWrapper = styled(FormControl)`
  width : 88%;
`;

ProfileThemeSettings.propTypes = {
  styles             : PropTypes.object.isRequired,
  fonts              : PropTypes.object.isRequired,
  backgroundType     : PropTypes.object.isRequired,
  handleChange       : PropTypes.func.isRequired,
  sliderChange       : PropTypes.func.isRequired,
  handleSelectChange : PropTypes.func.isRequired,
  handleFontChange   : PropTypes.func.isRequired,
  handleRadioChange  : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(updateThemeMutation),
  withStateHandlers(
    ({
      backgroundType = {
        transparent : 'true',
      },
      styles         = {
        h1FontSize        : '',
        h2FontSize        : '',
        RegularFontSize   : '',
        LinksColor        : '',
        LinksHover        : '',
        MenuLinksPosition : '',
        headerBackground  : '',
        buttonsBackground : '',
        buttonsColor      : '',
        borderRadius      : '',
      },
      fonts          = {
        headlineFont    : '',
        regularTextFont : '',
        linksFont       : '',
        subHead         : '',
      },
    }) => ({ styles, fonts, backgroundType }),
    {
      handleChange : (state, { mutate }) => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        const stringStyles = JSON.stringify(styles);
        const stringFonts  = JSON.stringify(state.fonts);
        mutate({
          variables: { style : stringStyles, fonts : stringFonts },
        }).then(() =>
          window.document.getElementById('frame_id').contentWindow.location.reload()
        );

        return ({ styles });
      },

      handleSelectChange : (state, { mutate }) => ({ target }) => {
        const styles = R.assoc(target.name, target.value, state.styles);
        const stringStyles = JSON.stringify(styles);
        const stringFonts  = JSON.stringify(state.fonts);
        mutate({
          variables: { style : stringStyles, fonts : stringFonts },
        }).then(() =>
          window.document.getElementById('frame_id').contentWindow.location.reload()
        );

        return ({ styles });
      },

      handleFontChange : (state, { mutate }) => (field, value) => {
        const fonts = R.assoc(field, value.family, state.fonts);
        const stringStyles = JSON.stringify(state.styles);
        const stringFonts  = JSON.stringify(fonts);
        mutate({
          variables: { style : stringStyles, fonts : stringFonts },
        }).then(() =>
          window.document.getElementById('frame_id').contentWindow.location.reload()
        );

        return ({ fonts });
      },

      sliderChange : (state, { mutate }) => (field, event, value) => {
        const styles = R.assoc(field, value, state.styles);
        const stringStyles = JSON.stringify(styles);
        const stringFonts  = JSON.stringify(state.fonts);
        mutate({
          variables: { style : stringStyles, fonts : stringFonts },
        }).then(() =>
          window.document.getElementById('frame_id').contentWindow.location.reload()
        );

        return ({ styles });
      },

      handleRadioChange : state => ({ target }) => {
        const backgroundType = R.assoc(target.name, target.value, state.backgroundType);
        return ({ backgroundType });
      }
    },
  ),
);

export default withRecompose(ProfileThemeSettings);
