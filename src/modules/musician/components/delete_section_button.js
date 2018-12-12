import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { graphql }              from 'react-apollo';
import {
  compose,
  withHandlers,
  withStateHandlers,
}                                from 'recompose';

import { deleteSectionMutation } from '../graphql/mutations';
import GradientButton            from '../../../layouts/gradient_button';
import Alert                     from '../../../layouts/alert';

const DeleteSectionButton = ({
  deleteSection,
  hasError,
  hideAlert,
  errorsList,
}) => (
  <DeleteSectionButton.Wrapper>
    <GradientButton onClick={deleteSection}>
      Delete this section
    </GradientButton>
    <Alert
      action="delete"
      hasError={hasError}
      hideAlert={hideAlert}
      errorsList={errorsList}
    />
  </DeleteSectionButton.Wrapper>
);

DeleteSectionButton.Wrapper = styled.span`
  padding-left : 15px;
`;

DeleteSectionButton.propTypes = {
  id            : PropTypes.number.isRequired,
  deleteSection : PropTypes.func.isRequired,
  hasError      : PropTypes.bool.isRequired,
  errorsList    : PropTypes.array.isRequired,
  hideAlert     : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(deleteSectionMutation),
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
    deleteSection : ({
      id,
      mutate,
      showAlert,
      errorsList,
    }) => async () => {
      const response = await mutate({
        variables: { sectionId : id }
      });

      const { ok, errors } = response.data.deleteSection;

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

export default withRecompose(DeleteSectionButton);
