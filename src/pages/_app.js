import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import AuthenticatedLayout from '../components/Layout/AuthenticatedLayout';
import AnonymousLayout from '../components/Layout/AnonymousLayout';
import theme from '../theme';
import '../styles/globals.scss';

const AppComponent = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const authenticatedLayout = (
    <AuthenticatedLayout title={pageProps.title} currentUser={pageProps.currentUser}>
      <CssBaseline />
      <Component {...pageProps} />
    </AuthenticatedLayout>
  );

  const anonymousLayout = (
    <AnonymousLayout title={pageProps.title}>
      <CssBaseline />
      <Component {...pageProps} />
    </AnonymousLayout>
  );

  return (
    <React.Fragment>
      <Head>
        <title>UOMLMS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {pageProps.currentUser ? authenticatedLayout : anonymousLayout}
      </ThemeProvider>
    </React.Fragment>
  );
};

AppComponent.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default AppComponent;
