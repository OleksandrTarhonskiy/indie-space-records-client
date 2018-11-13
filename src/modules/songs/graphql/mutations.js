import gql from 'graphql-tag';

export const uploadSongMutation = gql`
  mutation($name: String!, $price: Float!, $pricingType: String!, $release: String!, $file: File) {
    uploadSong(name: $name, price: $price, pricingType: $pricingType, release: $release, file: $file){
      ok
      errors {
        path
        message
      }
    }
  }
`;
