import gql from 'graphql-tag';

export const updateProfileMutation = gql`
  mutation($profileId: Int!, $name: String!, $genres: String!, $country: String!, $region: String!, $currency: String!) {
    updateProfile(profileId: $profileId, name: $name, genres: $genres, country: $country, region: $region, currency: $currency) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const updateThemeMutation = gql`
  mutation($style: String!, $fonts: String!) {
    updateTheme(style: $style, fonts: $fonts) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const createProfileMutation = gql`
  mutation($name: String!, $genres: String!, $country: String!, $region: String!, $currency: String!) {
    createProfile(name: $name, genres: $genres, country: $country, region: $region, currency: $currency) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const signUpMutation = gql`
  mutation($bandName: String!, $name: String!, $email: String!, $password: String!) {
    signUp(bandName: $bandName, name: $name, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const updateSectionStyleMutation = gql`
  mutation($sectionId: Int!, $style: String!) {
    updateSectionStyle(sectionId: $sectionId, style: $style) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const updateSectionContentMutation = gql`
  mutation($sectionId: Int!, $type: String, $name: String, $content: String) {
    updateSectionContent(sectionId: $sectionId, type: $type, name: $name, content: $content) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const createSectionMutation = gql`
  mutation($type: String!, $name: String!, $content: String, $style: String!) {
    createSection(type: $type, name: $name, content: $content, style: $style) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export const deleteSectionMutation = gql`
  mutation($sectionId: Int!) {
    deleteSection(sectionId: $sectionId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
