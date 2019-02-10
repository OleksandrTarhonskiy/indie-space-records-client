import React         from 'react';

import profileRoutes from '../../../routes/profile_routes';
import ProfileHeader from '../components/profile_header';
import ThemeProvider from '../HOCs/theme_provider';

const ProfileWrapper = () => (
  <ThemeProvider>
    <ProfileHeader />
    {profileRoutes}
  </ThemeProvider>
);

export default ProfileWrapper;
