import React                          from 'react';
import ColorPicker                    from 'material-ui-color-picker';
import * as R                         from 'ramda';
import { graphql }                    from 'react-apollo';
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
  },
  handleChange,
  submit,
}) => (
  <div>
    <ColorPicker
      defaultValue={background}
      value={background}
      onChange={handleChange.bind(null, 'background')}
      name="background"
      label="Background color"
      margin="normal"
    />
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
        background : '',
      },
    }) => ({ styles }),
    {
      handleChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
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
