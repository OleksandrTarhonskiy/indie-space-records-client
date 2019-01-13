import React                          from 'react';
import PropTypes                      from 'prop-types';
import ColorPicker                    from 'material-ui-color-picker';
import * as R                         from 'ramda';
import { graphql }                    from 'react-apollo';
import Radio                          from '@material-ui/core/Radio';
import RadioGroup                     from '@material-ui/core/RadioGroup';
import FormControlLabel               from '@material-ui/core/FormControlLabel';
import FormControl                    from '@material-ui/core/FormControl';
import Typography                     from '@material-ui/core/Typography';
import {
  compose,
  withStateHandlers,
}                                     from 'recompose';

import { updateSectionStyleMutation } from '../graphql/mutations';

const EditSectionStyleForm = ({
  styles: {
    background,
    color,
    headlineColor,
    displayHeadline,
  },
  handleChange,
  handleColorChange,
}) => (
  <div>
    <ColorPicker
      defaultValue={background}
      value={background}
      onChange={handleColorChange.bind(null, 'background')}
      name="background"
      label="Background color"
      margin="normal"
    />
    <ColorPicker
      defaultValue={color}
      value={color}
      name="color"
      onChange={handleColorChange.bind(null, 'color')}
      label="Text color"
      margin="normal"
    />
    {
      JSON.parse(displayHeadline)?
        <ColorPicker
          defaultValue={headlineColor}
          value={headlineColor}
          name="headlineColor"
          onChange={handleColorChange.bind(null, 'headlineColor')}
          label="Section Headline Color"
          margin="normal"
        />
        :
        null
    }
    <FormControl component="fieldset">
      <Typography>Display section headline?</Typography>
      <RadioGroup
        name="displayHeadline"
        id="displayHeadline"
        value={String(displayHeadline)}
        onChange={handleChange}
      >
        <FormControlLabel
          value="true"
          control={<Radio color="primary" />}
          label="yes"
        />
        <FormControlLabel
          value="false"
          control={<Radio color="primary" />}
          label="no"
        />
      </RadioGroup>
    </FormControl>
  </div>
);

EditSectionStyleForm.propTypes = {
  id                : PropTypes.number.isRequired,
  styles            : PropTypes.object.isRequired,
  handleColorChange : PropTypes.func.isRequired,
  handleChange      : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(updateSectionStyleMutation),
  withStateHandlers(
    ({
      styles     = {
        background      : '',
        color           : '',
        headlineColor   : '',
        displayHeadline : 'true',
      },
    }) => ({ styles }),
    {
      handleColorChange : (state, { id, mutate }) => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        const stringStyle = JSON.stringify(styles);
        mutate({
          variables: {
            sectionId : id,
            style     : stringStyle,
          },
        }).then(() =>
          window.document.getElementById('frame_id').contentWindow.location.reload()
        );

        return ({ styles });
      },

      handleChange : (state, { id, mutate }) => ({ target }) => {
        const styles = R.assoc(target.name, target.value, state.styles);
        const stringStyle = JSON.stringify(styles);
        mutate({
          variables: {
            sectionId : id,
            style     : stringStyle,
          },
        }).then(() =>
          window.document.getElementById('frame_id').contentWindow.location.reload()
        );

        return ({ styles });
      },
    },
  ),
);

export default withRecompose(EditSectionStyleForm);
