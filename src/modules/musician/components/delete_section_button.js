import React                    from 'react';
import styled                   from 'styled-components';
import { graphql }              from 'react-apollo';
import {
  compose,
  withHandlers,
}                                from 'recompose';

import { deleteSectionMutation } from '../graphql/mutations';
import GradientButton            from '../../../layouts/gradient_button';

const DeleteSectionButton = ({
  id,
  deleteSection,
}) => (
  <DeleteSectionButton.Wrapper>
    <GradientButton
      text={'Delete this section'}
      onClick={deleteSection}
    />
  </DeleteSectionButton.Wrapper>
);

DeleteSectionButton.Wrapper = styled.span`
  padding-left : 15px;
`;

const withRecompose = compose(
  graphql(deleteSectionMutation),
  withHandlers({
    deleteSection : ({ id, mutate } ) => async () => {
      console.log(id)
      const response = await mutate({
        variables: { sectionId : id }
      });
    },
  })
);

export default withRecompose(DeleteSectionButton);
