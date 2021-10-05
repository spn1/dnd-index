import React from 'react';

import { Layout } from '../components/layout/layout';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
