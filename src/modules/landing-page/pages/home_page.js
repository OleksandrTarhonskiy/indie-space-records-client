import React   from 'react';

import Head     from '../components/head';
import Artists  from '../components/artists';
import TopSongs from '../components/top_songs';
import LastNews from '../components/news_section';
import About    from '../components/about';

const HomePage = () => (
  <div>
    <Head />
    <Artists />
    <TopSongs />
    <LastNews />
    <About />
  </div>
);

export default HomePage;
