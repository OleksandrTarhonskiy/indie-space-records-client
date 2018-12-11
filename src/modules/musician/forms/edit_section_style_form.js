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
  withHandlers,
}                                     from 'recompose';

import GradientButton                 from '../../../layouts/gradient_button';
import { updateSectionStyleMutation } from '../graphql/mutations';
import Alert                          from '../../../layouts/alert';

const EditSectionStyleForm = ({
  styles: {
    background,
    displayHeadline,
  },
  handleChange,
  handleColorChange,
  submit,
  hasError,
  hideAlert,
  errorsList,
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
    <Alert
      action="update"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </div>
);

EditSectionStyleForm.propTypes = {
  id                : PropTypes.number.isRequired,
  styles            : PropTypes.object.isRequired,
  handleColorChange : PropTypes.func.isRequired,
  handleChange      : PropTypes.func.isRequired,
  submit            : PropTypes.func.isRequired,
  hasError          : PropTypes.bool.isRequired,
  errorsList        : PropTypes.array.isRequired,
  hideAlert         : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(updateSectionStyleMutation),
  withStateHandlers(
    ({
      styles     = {
        background      : '',
        displayHeadline : 'true',
      },
      errorsList = [],
      hasError   = false,
    }) => ({ styles, errorsList, hasError }),
    {
      handleColorChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        return ({ styles });
      },

      handleChange : state => ({ target }) => {
        const styles = R.assoc(target.name, target.value, state.styles);
        return ({ styles });
      },

      showAlert          : () => () => ({ hasError: true }),
      hideAlert          : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    submit : ({
      styles,
      mutate,
      id,
      showAlert,
      errorsList,
    }) => async () => {
      const stringStyle = JSON.stringify(styles);
      const response = await mutate({
        variables: {
          sectionId : id,
          style     : stringStyle,
        },
      });

      const { ok, errors } = response.data.updateSectionStyle;

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

export default withRecompose(EditSectionStyleForm);
