import React         from 'react';
import ColorPicker   from 'material-ui-color-picker';
import * as R        from 'ramda';
import {
  compose,
  withStateHandlers,
}                    from 'recompose';

const EditSectionStyleForm = ({
  style: {
    background,
  },
  handleChange,
}) => (
  <div>
    <ColorPicker
      defaultValue={background}
      value={background}
      onChange={handleChange}
      name="background"
      label="Background color"
      margin="normal"
    />
  </div>
);

const withRecompose = compose(
  withStateHandlers(
    ({
      style     = {
        background : '',
      },
    }) => ({ style }),
    {
      handleChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.style);
        return ({ styles });
      },
    },
  ),
);

export default withRecompose(EditSectionStyleForm);
