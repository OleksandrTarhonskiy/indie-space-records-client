import React                       from 'react';
import PropTypes                   from 'prop-types';
import Profile                     from '../components/profile';
import { graphql }                 from 'react-apollo';
import CircularProgress            from '@material-ui/core/CircularProgress';
import { compose }                 from 'recompose';

import { myProfileWithThemeQuery } from '../graphql/queries';

const MyProfilePage = ({
  data: { loading, myProfile = {} },
}) => {
  return(
    <div>
      {
        loading?
          <CircularProgress />
          :
          <Profile myProfile={myProfile} />
      }
    </div>
  );
};

MyProfilePage.propTypes = {
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(myProfileWithThemeQuery),
);

export default withRecompose(MyProfilePage);
