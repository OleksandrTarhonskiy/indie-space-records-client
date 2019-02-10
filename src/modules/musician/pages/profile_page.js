import React     from 'react';

import Sections  from '../components/sections';
import withTheme from '../HOCs/with_theme';

const ProfilePage = props => (
  <React.Fragment>
    <Sections />
  </React.Fragment>
);

export default withTheme(ProfilePage);
