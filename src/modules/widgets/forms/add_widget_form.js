import React                 from 'react';
import PropTypes             from 'prop-types';
import TextField             from '@material-ui/core/TextField';
import InputLabel            from '@material-ui/core/InputLabel';
import FormControl           from '@material-ui/core/FormControl';
import Input                 from '@material-ui/core/Input';
import Select                from '@material-ui/core/Select';
import MenuItem              from '@material-ui/core/MenuItem';
import {
  CountryDropdown,
  RegionDropdown
}                            from 'react-country-region-selector';
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
import { SOCIAL_NETWORKS }   from '../models/social_networks';
import { addWidgetMutation } from '../graphql/mutations';

const AddWidgetForm = ({
  id,
  form: {
    type,
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
    <AddWidgetForm.SelectWrapper>
      <InputLabel
        ref={ref => {
          this.InputLabelRef = ref;
        }}
        htmlFor="type"
      >
        Social network
      </InputLabel>
      <Select
        value={type}
        onChange={handleChange}
        input={
          <Input
            name="type"
            id="type"
          />
        }
      >
        { SOCIAL_NETWORKS.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>) }
      </Select>
    </AddWidgetForm.SelectWrapper>
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

AddWidgetForm.InputsWrapper = styled.div`
  display        : flex;
  flex-direction : column;
`;

AddWidgetForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

AddWidgetForm.CountryDropdown = styled(CountryDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

AddWidgetForm.RegionDropdown = styled(RegionDropdown)`
  background    : #ffff;
  border        : 1px solid #999;
  height        : 33px;
  border-radius : 0;
  outline       : none;
  margin-top    : 2%;
`;

AddWidgetForm.SelectWrapper = styled(FormControl)`
  width : 100%;
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

const canSubmitForm = ({ type, link }) => R.all(R.equals(true))([
  !R.isEmpty(type),
  !R.isEmpty(link),
]);

const withRecompose = compose(
  graphql(addWidgetMutation),
  withStateHandlers(
    ({
      form      = {
        type : '',
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
        type,
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
          type,
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
