import React             from 'react';

import profileRoutes     from '../../../routes/profile_routes';
import WithHeaderWrapper from '../components/with_header_wrapper';
import ThemeProvider     from '../HOCs/theme_provider';

const ProfileWrapper = () => (
  <ThemeProvider>
    <WithHeaderWrapper />
    {profileRoutes}
  </ThemeProvider>
);

export default ProfileWrapper;
