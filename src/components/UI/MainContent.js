import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from './Page';

/**
 * Create the styles that can be used by the MainContent component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  mainContent: {
    height: '100%',
  },
  appBarMargin: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.drawer.smWidth,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.drawer.mdWidth,
    },
  },
}));

/**
 * Renders the main content of the current page
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const MainContent = (props) => {
  const classes = useStyles();
  const mainClasses = [classes.mainContent, props.isAuthenticated ? classes.appBarMargin : null];

  return (
    <React.Fragment>
      <div className={classes.toolbar}></div>
      <main className={mainClasses.join(' ')}>
        <Page>{props.children}</Page>
      </main>
    </React.Fragment>
  );
};

export default MainContent;
