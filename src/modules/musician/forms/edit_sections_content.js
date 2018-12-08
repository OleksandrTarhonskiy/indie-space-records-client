import React             from 'react';
import styled            from 'styled-components';
import TextField         from '@material-ui/core/TextField';
import InputLabel        from '@material-ui/core/InputLabel';
import FormControl       from '@material-ui/core/FormControl';
import Input             from '@material-ui/core/Input';
import Select            from '@material-ui/core/Select';
import MenuItem          from '@material-ui/core/MenuItem';
import { graphql }       from 'react-apollo';
import * as R            from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                        from 'recompose';

import { SECTION_TYPES } from '../models/section_types';
import { updateSectionContentMutation } from '../graphql/mutations';
import GradientButton                 from '../../../layouts/gradient_button';

const EditSectionsContent = ({
  section: {
    id,
    name,
    type,
    content,
  },
  handleChange,
  updateSection,
}) => (
  <EditSectionsContent.Form>
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
    <EditSectionsContent.SelectWrapper>
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
    </EditSectionsContent.SelectWrapper>
    <EditSectionsContent.ContentBlock>
      {
        type === 'text'?
        <TextField
          name="content"
          value={content}
          label="page content"
          multiline="true"
        />
        :
        <p>in this section will be displaying your {type}</p>
      }
    </EditSectionsContent.ContentBlock>
    <GradientButton
      text={'Update this section'}
      onClick={updateSection}
    />
  </EditSectionsContent.Form>
);

EditSectionsContent.Form = styled.form`
  width       : 100%;
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  font-weight : 500;
`;

EditSectionsContent.ContentBlock = styled.div`
  margin        : 4%;
  padding       : 2%;
  background    : blue;
  background    : #f4f4f4;
  border-radius : 6px;
`;

EditSectionsContent.SelectWrapper = styled(FormControl)`
  width : 100%;
`;

const withRecompose = compose(
  graphql(updateSectionContentMutation),
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
    updateSection : ({
      section,
      mutate,
    }) => async () => {
      const response = await mutate({
        variables: {
          sectionId : section.id,
          name      : section.name,
          content   : section.content,
          type      : section.type,
        }
      });
      console.log(response)
    },
  })
);

export default withRecompose(EditSectionsContent);
