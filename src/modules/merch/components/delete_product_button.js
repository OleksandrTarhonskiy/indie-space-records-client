import React                     from 'react';
import PropTypes                 from 'prop-types';
import IconButton                from '@material-ui/core/IconButton';
import DeleteIcon                from '@material-ui/icons/Delete';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                                from 'recompose';
import { graphql }               from 'react-apollo';

import Alert                     from '../../../layouts/alert';
import { deleteProductMutation } from '../graphql/mutations';

const DeleteProductButton = ({
  hasError,
  errorsList,
  hideAlert,
  deleteProduct,
}) => (
  <React.Fragment>
    <IconButton onClick={deleteProduct}>
      <DeleteIcon />
    </IconButton>
    <Alert
      action="deleted"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </React.Fragment>
);

DeleteProductButton.propTypes = {
  deleteProduct : PropTypes.func.isRequired,
  id            : PropTypes.number.isRequired,
  hideAlert     : PropTypes.func.isRequired,
  errorsList    : PropTypes.array.isRequired,
  hasError      : PropTypes.bool.isRequired,
};

const withRecompose = compose(
  graphql(deleteProductMutation),
  withStateHandlers(
    ({
      hasError   = false,
      errorsList = [],
    }) => ({ hasError, errorsList }),
    {
      showAlert : () => () => ({ hasError: true }),
      hideAlert : () => () => ({ hasError: false }),
    },
  ),
  withHandlers({
    deleteProduct : ({
      id,
      mutate,
      showAlert,
      errorsList,
    }) => async () => {
      const response = await mutate({
        variables: { productId : id}
      });

      const { ok, errors } = response.data.deleteProduct;

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

export default withRecompose(DeleteProductButton);
