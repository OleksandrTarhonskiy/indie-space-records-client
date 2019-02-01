import React                     from 'react';
import PropTypes                 from 'prop-types';
import styled                    from 'styled-components';
import TextField                 from '@material-ui/core/TextField';
import InputLabel                from '@material-ui/core/InputLabel';
import FormControl               from '@material-ui/core/FormControl';
import Input                     from '@material-ui/core/Input';
import Select                    from '@material-ui/core/Select';
import MenuItem                  from '@material-ui/core/MenuItem';
import { graphql }               from 'react-apollo';
import * as R                    from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                                from 'recompose';

import { SECTION_TYPES }         from '../models/section_types';
import { createSectionMutation } from '../graphql/mutations';
import GradientButton            from '../../../layouts/gradient_button';
import Alert                     from '../../../layouts/alert';

const NewSectionForm = ({
  section: {
    name,
    type,
    content,
  },
  handleChange,
  createSection,
  hasError,
  hideAlert,
  errorsList,
  canSubmit,
}) => (
  <NewSectionForm.Form>
    <h2>New section form</h2>
    <TextField
      id="name"
      name="name"
      label="Section name"
      type="text"
      margin="normal"
      value={name}
      onChange={handleChange}
      fullWidth
    />
    <NewSectionForm.SelectWrapper>
      <InputLabel
        ref={ref => {
          this.InputLabelRef = ref;
        }}
        htmlFor="type"
      >
        Type
      </InputLabel>
      <Select
        value={type || ''}
        onChange={handleChange}
        input={
          <Input
            name="type"
            id="type"
          />
        }
      >
        { SECTION_TYPES.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>) }
      </Select>
    </NewSectionForm.SelectWrapper>
    {
      type === 'text'?
        <TextField
          name="content"
          onChange={handleChange}
          value={content}
          label="page content"
          multiline="true"
        />
        :
        null
    }
    <br />
    <GradientButton
      onClick={createSection}
      disabled={!canSubmit}
    >
      Create
    </GradientButton>
    <Alert
      action="created"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </NewSectionForm.Form>
);

NewSectionForm.propTypes = {
  section       : PropTypes.object.isRequired,
  handleChange  : PropTypes.func.isRequired,
  createSection : PropTypes.func.isRequired,
  hasError      : PropTypes.bool.isRequired,
  errorsList    : PropTypes.array.isRequired,
  hideAlert     : PropTypes.func.isRequired,
  canSubmit     : PropTypes.bool.isRequired,
};

NewSectionForm.Form = styled.form`
  width       : 100%;
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  font-weight : 500;
`;

NewSectionForm.SelectWrapper = styled(FormControl)`
  width : 100%;
`;

const canSubmitForm = ({ name, type }) => R.all(R.equals(true))([
  !R.isEmpty(name),
  !R.isEmpty(type),
]);

const withRecompose = compose(
  graphql(createSectionMutation),
  withStateHandlers(
    ({
      section    = {
        name    : '',
        content : '',
        type    : '',
      },
      canSubmit  = false,
      errorsList = [],
      hasError   = false,
    }) => ({ section, errorsList, hasError, canSubmit }),
    {
      handleChange : state => ({ target }) => {
        const section = R.assoc(target.name, target.value, state.section);
        return ({
          section,
          canSubmit : canSubmitForm(section),
        });
      },

      showAlert    : () => () => ({ hasError: true }),
      hideAlert    : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    createSection : ({
      section,
      mutate,
      showAlert,
      errorsList,
    }) => async () => {
      const response = await mutate({
        variables: {
          name    : section.name,
          content : section.content,
          type    : section.type,
          style   : '{"background" : "#fffff", "displayHeadline" : "true"}'
        }
      });

      const { ok, errors } = response.data.createSection;

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

export default withRecompose(NewSectionForm);
