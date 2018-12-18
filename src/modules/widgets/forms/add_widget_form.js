import React                 from 'react';
import PropTypes             from 'prop-types';
import TextField             from '@material-ui/core/TextField';
import * as R                from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                            from 'recompose';
import { graphql }           from 'react-apollo';
import styled                from 'styled-components';

import GradientButton        from '../../../layouts/gradient_button';
import Alert                 from '../../../layouts/alert';
import { addWidgetMutation } from '../graphql/mutations';

const AddWidgetForm = ({
  id,
  form: {
    link,
  },
  submit,
  handleChange,
  hasError,
  hideAlert,
  errorsList,
  canSubmit,
}) => (
  <form>
    <AddWidgetForm.Headline>
      Add social network widget
    </AddWidgetForm.Headline>
    <TextField
      name="link"
      label="Link"
      type="text"
      margin="normal"
      value={link}
      onChange={handleChange}
      fullWidth
    />
    <br />
    <GradientButton
      disabled={!canSubmit}
      onClick={submit}
    >
      Add
    </GradientButton>
    <Alert
      action="added"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </form>
);

AddWidgetForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

AddWidgetForm.propTypes = {
  form         : PropTypes.object.isRequired,
  submit       : PropTypes.func.isRequired,
  handleChange : PropTypes.func.isRequired,
  hasError     : PropTypes.bool.isRequired,
  errorsList   : PropTypes.array.isRequired,
  hideAlert    : PropTypes.func.isRequired,
  canSubmit    : PropTypes.bool.isRequired,
};

const canSubmitForm = ({ link }) => R.all(R.equals(true))([
  !R.isEmpty(link),
]);

const withRecompose = compose(
  graphql(addWidgetMutation),
  withStateHandlers(
    ({
      form      = {
        link : '',
      },
      canSubmit  = false,
      errorsList = [],
      hasError   = false,
    }) => ({ form, errorsList, hasError, canSubmit }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({
          form,
          canSubmit : canSubmitForm(form),
        });
      },
      showAlert     : () => () => ({ hasError: true }),
      hideAlert     : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    submit : ({
      form : {
        link,
      },
      mutate,
      errorsList,
      showAlert,
      id,
    }) => async () => {
      const response = await mutate({
        variables: {
          sectionId : id,
          link,
        }
      });

      const { ok, errors } = response.data.addWidget;

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

export default withRecompose(AddWidgetForm);
