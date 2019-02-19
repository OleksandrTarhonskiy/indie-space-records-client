import React           from 'react';
import PropTypes       from 'prop-types';
import * as R          from 'ramda';
import styled          from 'styled-components';

import EditProfileForm from '../forms/edit_profile_form';
import withProfileData from '../HOCs/with_profile_data';

const EditProfilePage = ({
  profile : {
    myProfile,
  },
}) => (
  <EditProfilePage.FormWrapper>
    <EditProfileForm
      key={myProfile.id}
      form={R.assoc('genres', myProfile.genres.split(','), myProfile)}
    />
  </EditProfilePage.FormWrapper>
);

EditProfilePage.FormWrapper = styled.div`
  padding : 8% 10%;
`;

EditProfilePage.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default withProfileData(EditProfilePage);
