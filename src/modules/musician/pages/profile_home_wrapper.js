import React                  from 'react';
import PropTypes              from 'prop-types';
import styled                 from 'styled-components';
import { graphql }            from 'react-apollo';
import CircularProgress       from '@material-ui/core/CircularProgress';

import MusicianProfileForm    from '../forms/musician_profile_form';
import { hasProfileQuery }    from '../graphql/queries';
import MusicianProfileDetails from '../components/musician_profile_details';

const ProfileHomeWrapper = ({ data: { loading, me = {} } }) => (
  <div>
    {
      loading ?
        <CircularProgress />
        :
        me.hasProfile?
          <MusicianProfileDetails />
          :
          <ProfileHomeWrapper.FormWrapper>
            <MusicianProfileForm />
          </ProfileHomeWrapper.FormWrapper>
    }
  </div>
);

ProfileHomeWrapper.FormWrapper = styled.div`
  padding         : 15% 15%;
  display         : flex;
  justify-content : center;
`;

ProfileHomeWrapper.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(hasProfileQuery)(ProfileHomeWrapper);
