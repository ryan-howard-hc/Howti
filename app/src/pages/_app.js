import React from 'react';
import Layout from './layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;