import React       from 'react';
import ColorPicker from 'material-ui-color-picker';

const EditSectionForm = ({
  style: {
    background,
  }
}) => (
  <div>
    <ColorPicker
      defaultValue={background}
      value={background}
      name="background"
      label="Background color"
      margin="normal"
    />
  </div>
);

export default EditSectionForm;
