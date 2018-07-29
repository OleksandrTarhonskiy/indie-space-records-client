import React   from 'react';

import Head     from '../components/head';
import Artists  from '../components/artists';
import LastNews from '../components/news_section';
import About    from '../components/about';

const HomePage = () => (
  <div>
    <Head />
    <Artists />
    <LastNews />
    <About />
  </div>
);

export default HomePage;
