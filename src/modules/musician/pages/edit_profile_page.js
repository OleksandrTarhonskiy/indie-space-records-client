import React            from 'react';
import { gql, graphql } from 'react-apollo';
import * as R           from 'ramda';
import styled           from 'styled-components';

import EditProfileForm  from '../forms/edit_profile_form'

const EditProfilePage = ({ data: { allProfiles = []} }) => (
  <EditProfilePage.FormWrapper>
    {
      allProfiles.map(profile =>
        <EditProfileForm
          form={R.assoc('genres', profile.genres.split(","), profile)}
        />
      )
    }
  </EditProfilePage.FormWrapper>
);

EditProfilePage.FormWrapper = styled.div`
  padding : 8% 10%;
`;

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      country
      region
    }
  }
`;

export default graphql(allProfilesQuery)(EditProfilePage);
