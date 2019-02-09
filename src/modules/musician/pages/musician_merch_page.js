import React                             from 'react';

import FullMerchList                     from '../components/full_merch_list';
import WithHeaderWrapper                 from '../components/with_header_wrapper';

const MusicianMerchPage = () => (
  <WithHeaderWrapper>
    <FullMerchList />
  </WithHeaderWrapper>
);

export default MusicianMerchPage;
