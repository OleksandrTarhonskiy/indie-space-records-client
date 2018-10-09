import React            from 'react';
import PropTypes        from 'prop-types';
import TextField        from '@material-ui/core/TextField';
import styled           from 'styled-components';
import * as R           from 'ramda';
import {
  compose,
  withStateHandlers,
}                       from 'recompose';
import validator        from 'validator';
import Switch           from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import GradientButton   from '../../../layouts/gradient_button';

const CreateEvent = ({
  form: {
    title,
    details,
    price,
  },
  handleChange,
  handlePriceChange,
  canSubmit,
}) => (
  <div>
    <CreateEvent.Headline>
      Create new event
    </CreateEvent.Headline>
    <form>
      <TextField
        name="title"
        label="Title"
        margin="normal"
        value={title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="details"
        label="details"
        margin="normal"
        value={details}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Price"
        value={price}
        name="price"
        onChange={handleChange}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <br />
      <GradientButton
        text={'Create'}
        disabled={!canSubmit}
      />
    </form>
  </div>
);

CreateEvent.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

CreateEvent.propTypes = {
  form               : PropTypes.object.isRequired,
  canSubmit          : PropTypes.bool.isRequired,
  handleChange       : PropTypes.func.isRequired,
};

const canSubmitForm = ({ title, details, price }) => R.all(R.equals(true))([
  !R.isEmpty(title),
  !R.isEmpty(details),
  !R.isEmpty(price),
]);

const withRecompose = compose(
  withStateHandlers(
    ({
      form      = {
        title   : '',
        details : '',
        price   : '',
      },
      canSubmit = false,
    }) => ({ form, canSubmit }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },
    },
  ),
);

export default withRecompose(CreateEvent);
