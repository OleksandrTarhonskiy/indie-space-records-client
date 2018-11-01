import React               from 'react';
import PropTypes           from 'prop-types';
import { graphql }         from 'react-apollo';
import * as R              from 'ramda';
import styled              from 'styled-components';
import CircularProgress    from '@material-ui/core/CircularProgress';

import EditProfileForm     from '../forms/edit_profile_form';
import { myProfilesQuery } from '../graphql/queries';

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

EditProfilePage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(myProfilesQuery)(EditProfilePage);
