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

export const deleteWidgetMutation = gql`
  mutation($widgetId: Int!) {
    deleteWidget(widgetId: $widgetId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
