import React from 'react';
import Link from 'next/link';
import { AppBar as MuiAppBar, makeStyles } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/**
 * Creates the styles that can be used by the AppBar component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  buttonTypography: {
    ...theme.typography.button,
  },
}));

/**
 * Renders the app bar of the application with different content based on if the
 * user is authenticated or not
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AppBar = (props) => {
  const classes = useStyles();

  /**
   * The buttons shown if the user is not authenticated
   *
   * @const {JSX.Element} anonymousButtons
   */
  const anonymousButtons = (
    <React.Fragment>
      <Link href="/auth/signin">
        <Button color="inherit">Sign In</Button>
      </Link>
      <Link href="/auth/signup">
        <Button color="inherit">Sign Up</Button>
      </Link>
    </React.Fragment>
  );

  /**
   * The buttons shown if the user is authenticated
   *
   * @const {JSX.Element} authenticatedButtons
   */
  const authenticatedButtons = (
    <React.Fragment>
      <Typography className={classes.buttonTypography}>{props.currentUser?.name} |</Typography>
      <Link href="/auth/signout">
        <Button color="inherit">Sign Out</Button>
      </Link>
    </React.Fragment>
  );

  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        {props.isAuthenticated && (
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.onToggleClick}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        )}
        <Link href="/">
          <a className={classes.title}>
            <Typography variant="h6" noWrap>
              UOMLMS {props.title && `| ${props.title}`}
            </Typography>
          </a>
        </Link>

        {props.isAuthenticated ? authenticatedButtons : anonymousButtons}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
