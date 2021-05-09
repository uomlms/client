import Head from 'next/head';
import React from 'react';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Codex</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
