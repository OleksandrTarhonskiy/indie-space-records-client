import gql from 'graphql-tag';

export const addWidgetMutation = gql`
  mutation($sectionId: Int!, $link: String!) {
    addWidget(sectionId: $sectionId, link: $link) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
