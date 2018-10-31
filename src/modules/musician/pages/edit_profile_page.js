import React            from 'react';
import PropTypes        from 'prop-types';
import { gql, graphql } from 'react-apollo';
import * as R           from 'ramda';
import styled           from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import EditProfileForm  from '../forms/edit_profile_form';

const EditProfilePage = ({ data: { loading, myProfile = {} } }) => (
  <EditProfilePage.FormWrapper>
    {
      loading?
        <CircularProgress />
        :
        <EditProfileForm
          key={myProfile.id}
          form={R.assoc('genres', myProfile.genres.split(','), myProfile)}
        />
    }
  </EditProfilePage.FormWrapper>
);

EditProfilePage.FormWrapper = styled.div`
  padding : 8% 10%;
`;

const allProfilesQuery = gql`
  {
    myProfile{
      id
      name
      genres
      country
      region
      currency
    }
  }
`;

EditProfilePage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(allProfilesQuery)(EditProfilePage);
