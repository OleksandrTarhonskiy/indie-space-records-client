import React                     from 'react';
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

const NewSectionForm = ({
  section: {
    id,
    name,
    type,
    content,
  },
  handleChange,
  createSection,
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
      text={'Create'}
      onClick={createSection}
    />
  </NewSectionForm.Form>
);

NewSectionForm.Form = styled.form`
  width       : 100%;
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  font-weight : 500;
`;

NewSectionForm.SelectWrapper = styled(FormControl)`
  width : 100%;
`;

const withRecompose = compose(
  graphql(createSectionMutation),
  withStateHandlers(
    ({
      section    = {
        name    : '',
        content : '',
        type    : '',
      },
    }) => ({ section }),
    {
      handleChange : state => ({ target }) => {
        const section = R.assoc(target.name, target.value, state.section);
        return ({ section });
      },
    },
  ),
  withHandlers({
    createSection : ({
      section,
      mutate,
    }) => async () => {
      console.log(section)
      const response = await mutate({
        variables: {
          name    : section.name,
          content : section.content,
          type    : section.type,
          style   : '{"background" : "#fffff", "displayHeadline" : "true"}'
        }
      });
      console.log(response)
    },
  })
);

export default withRecompose(NewSectionForm);
