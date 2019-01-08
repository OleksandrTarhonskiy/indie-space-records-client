import React                       from 'react';
import PropTypes                   from 'prop-types';
import { graphql }                 from 'react-apollo';
import styled                      from 'styled-components';
import Paper                       from '@material-ui/core/Paper';
import CircularProgress            from '@material-ui/core/CircularProgress';
import Iframe                      from 'react-iframe'

import { myProfileWithThemeQuery } from '../graphql/queries';
import Sidebar                     from '../components/sidebar';

const ProfileThemeSettingsPage = ({
  data: {
    loading,
    myProfile = {},
  },
}) => (
  <ProfileThemeSettingsPage.Wrapper>
    {
      loading ?
      <CircularProgress />
      :
      <React.Fragment>
        <Sidebar profile={myProfile} />
        <ProfileThemeSettingsPage.ProfileWrapper>
          <Iframe url="http://localhost:3000/musicians/1"
            width="100%"
            height="100%"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </ProfileThemeSettingsPage.ProfileWrapper>
      </React.Fragment>
    }
  </ProfileThemeSettingsPage.Wrapper>
);

ProfileThemeSettingsPage.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  background     : #eaedf5;
`;

ProfileThemeSettingsPage.ProfileWrapper = styled(Paper)`
  width   : 80%;
  padding : 1%;
  margin  : 1% 0;
`;

ProfileThemeSettingsPage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(myProfileWithThemeQuery)(ProfileThemeSettingsPage);
