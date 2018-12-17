import gql from 'graphql-tag';

export const addWidgetMutation = gql`
  mutation($sectionId: Int!, $type: String!, $link: String!) {
    addWidget(sectionId: $sectionId, type: $type, link: $link) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
