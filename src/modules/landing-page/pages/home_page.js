import React   from 'react';

import Head     from '../components/head';
import Artists  from '../components/artists';
import LastNews from '../components/news_section';

const HomePage = () => (
  <div>
    <Head />
    <Artists />
    <LastNews />
  </div>
);

export default HomePage;
