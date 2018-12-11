import React                            from 'react';
import PropTypes                        from 'prop-types';
import styled                           from 'styled-components';
import TextField                        from '@material-ui/core/TextField';
import InputLabel                       from '@material-ui/core/InputLabel';
import FormControl                      from '@material-ui/core/FormControl';
import Input                            from '@material-ui/core/Input';
import Select                           from '@material-ui/core/Select';
import MenuItem                         from '@material-ui/core/MenuItem';
import { graphql }                      from 'react-apollo';
import * as R                           from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                                       from 'recompose';

import { SECTION_TYPES }                from '../models/section_types';
import { updateSectionContentMutation } from '../graphql/mutations';
import GradientButton                   from '../../../layouts/gradient_button';
import DeleteSectionButton              from '../components/delete_section_button';
import Alert                            from '../../../layouts/alert';

const EditSectionsContent = ({
  section: {
    id,
    name,
    type,
    content,
  },
  handleChange,
  updateSection,
  hasError,
  hideAlert,
  errorsList,
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
            onChange={handleChange}
            label="page content"
            multiline={true}
          />
          :
          <p>in this section will be displaying your {type}</p>
      }
    </EditSectionsContent.ContentBlock>
    <GradientButton
      text={'Update this section'}
      onClick={updateSection}
    />
    <DeleteSectionButton id={id} />
    <Alert
      action="update"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
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

EditSectionsContent.propTypes = {
  section       : PropTypes.object.isRequired,
  updateSection : PropTypes.func.isRequired,
  handleChange  : PropTypes.func.isRequired,
  hasError      : PropTypes.bool.isRequired,
  errorsList    : PropTypes.array.isRequired,
  hideAlert     : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(updateSectionContentMutation),
  withStateHandlers(
    ({
      section    = {
        name    : '',
        content : '',
        type    : '',
      },
      errorsList = [],
      hasError   = false,
    }) => ({ section, errorsList, hasError }),
    {
      handleChange : state => ({ target }) => {
        const section = R.assoc(target.name, target.value, state.section);
        return ({ section });
      },

      showAlert          : () => () => ({ hasError: true }),
      hideAlert          : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    updateSection : ({
      section,
      mutate,
      showAlert,
      errorsList,
    }) => async () => {
      const response = await mutate({
        variables: {
          sectionId : section.id,
          name      : section.name,
          content   : section.content,
          type      : section.type,
        }
      });

      const { ok, errors } = response.data.updateSectionContent;

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

export default withRecompose(EditSectionsContent);
