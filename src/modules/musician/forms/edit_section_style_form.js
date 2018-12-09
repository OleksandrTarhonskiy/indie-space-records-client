import React                          from 'react';
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
  withHandlers,
}                                     from 'recompose';

import GradientButton                 from '../../../layouts/gradient_button';
import { updateSectionStyleMutation } from '../graphql/mutations';

const EditSectionStyleForm = ({
  id,
  styles: {
    background,
    displayHeadline,
  },
  handleChange,
  handleColorChange,
  submit,
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
    <GradientButton
      text={'Update this section'}
      onClick={submit}
    />
  </div>
);

const withRecompose = compose(
  graphql(updateSectionStyleMutation),
  withStateHandlers(
    ({
      styles     = {
        background      : '',
        displayHeadline : 'true',
      },
    }) => ({ styles }),
    {
      handleColorChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        return ({ styles });
      },

      handleChange : state => ({ target }) => {
        const styles = R.assoc(target.name, target.value, state.styles);
        return ({ styles });
      },
    },
  ),
  withHandlers({
    submit : ({ styles, mutate, id }) => async () => {
      const stringStyle = JSON.stringify(styles);
      const response = await mutate({
        variables: {
          sectionId : id,
          style     : stringStyle,
        },
      });

      console.log(response);
    },
  })
);

export default withRecompose(EditSectionStyleForm);
