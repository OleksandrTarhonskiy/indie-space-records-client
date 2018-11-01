import React                       from 'react';
import Profile                     from '../components/profile';
import { graphql }                 from 'react-apollo';
import CircularProgress            from '@material-ui/core/CircularProgress';
import { withRouter }              from 'react-router-dom';
import { compose }                 from 'recompose';
import { Link }                    from 'react-router-dom';
import styled                      from 'styled-components';

import { myProfileWithThemeQuery } from '../graphql/queries';

const MyProfilePage = ({
  data: { loading, myProfile = {} },
  history,
}) => {
  if (myProfile.theme) {
    return(
      <div>
        {
          loading?
            <CircularProgress />
            :
            <Profile myProfile={myProfile} />
        }
      </div>
    );} else {
    return (
      <MyProfilePage.RedirectContainer>
      choose theme
        <Link to="/musician/themes">
        here
        </Link>
      </MyProfilePage.RedirectContainer>
    );
  }
};

MyProfilePage.RedirectContainer = styled.div`
  padding     : 20%;
  font-family : 'Roboto', sans-serif;
  text-align  : center;
  font-size   : 50px;
`;

const withRecompose = compose(
  withRouter,
  graphql(myProfileWithThemeQuery),
);

export default withRecompose(MyProfilePage);
