import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import AuthenticatedLayout from '../components/Layout/AuthenticatedLayout';
import AnonymousLayout from '../components/Layout/AnonymousLayout';
import useClient from '../hooks/use-client';
import theme from '../theme';
import '../styles/globals.scss';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>UOMLMS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthenticatedLayout>
          <CssBaseline />
          <Component {...pageProps} currentUser={currentUser} />
        </AuthenticatedLayout>
        {/* <AnonymousLayout>
          <CssBaseline />
          <Component {...pageProps} currentUser={currentUser} />
        </AnonymousLayout> */}
      </ThemeProvider>
    </React.Fragment>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = useClient(appContext.ctx);
  // const data = {};
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

AppComponent.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default AppComponent;
