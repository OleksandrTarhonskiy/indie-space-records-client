import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import IconButton               from '@material-ui/core/IconButton';
import DeleteIcon               from '@material-ui/icons/Delete';
import { graphql }              from 'react-apollo';
import {
  compose,
  withHandlers,
  withStateHandlers,
}                               from 'recompose';

import { deleteWidgetMutation } from '../graphql/mutations';
import Alert                    from '../../../layouts/alert';

const DeleteWidgetButton = ({
  deleteWidget,
  hasError,
  hideAlert,
  errorsList,
}) => (
  <DeleteWidgetButton.Wrapper>
    <IconButton onClick={deleteWidget}>
      <DeleteIcon />
    </IconButton>
    <Alert
      action="deleted"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </DeleteWidgetButton.Wrapper>
);

DeleteWidgetButton.Wrapper = styled.span`
  padding-left : 15px;
`;

DeleteWidgetButton.propTypes = {
  id           : PropTypes.number.isRequired,
  deleteWidget : PropTypes.func.isRequired,
  hasError     : PropTypes.bool.isRequired,
  errorsList   : PropTypes.array.isRequired,
  hideAlert    : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(deleteWidgetMutation),
  withStateHandlers(
    ({
      errorsList = [],
      hasError   = false,
    }) => ({ errorsList, hasError }),
    {
      showAlert : () => () => ({ hasError: true }),
      hideAlert : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    deleteWidget : ({
      id,
      mutate,
      showAlert,
      errorsList,
    }) => async () => {
      const response = await mutate({
        variables: { widgetId : id }
      });

      const { ok, errors } = response.data.deleteWidget;

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

export default withRecompose(DeleteWidgetButton);
