import React from 'react';
import { AppBar as MuiAppBar, makeStyles } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  buttonTypography: {
    ...theme.typography.button,
  },
}));

const AppBar = (props) => {
  const classes = useStyles();

  const anonymousButtons = (
    <React.Fragment>
      <Button color="inherit">
        <Link href="/auth/signin">Sign In</Link>
      </Button>
      <Button color="inherit">
        <Link href="/auth/signup">Sign Up</Link>
      </Button>
    </React.Fragment>
  );

  const authenticatedButtons = (
    <React.Fragment>
      <Typography className={classes.buttonTypography}>Username |</Typography>
      <Button color="inherit">
        <Link href="/auth/signout">Sign Out</Link>
      </Button>
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
        <Typography variant="h6" noWrap className={classes.title}>
          UOMLMS
        </Typography>

        {props.isAuthenticated ? authenticatedButtons : anonymousButtons}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
