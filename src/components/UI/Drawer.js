import React from 'react';
import { Drawer as MuiDrawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
// import NavLink from 'next/link';
import Link from 'next/link';

const useStyles = makeStyles((theme) => {
  return {
    drawerWidth: {
      width: '240px',
    },
  };
});

const Drawer = (props) => {
  const classes = useStyles();

  const drawer = (
    <React.Fragment>
      <Toolbar />
      <List>
        <ListItem button key="log-in">
          <Link href="/auth/signin">
            <ListItemText>Sign in</ListItemText>
          </Link>
        </ListItem>
        <ListItem button key="sign-up">
          <Link href="/auth/signup">
            <ListItemText>Sign up</ListItemText>
          </Link>
        </ListItem>
      </List>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Hidden smUp implementation="css">
        <MuiDrawer
          variant="temporary"
          open={props.open}
          onClose={props.handleDrawerToggle}
          classes={{ paper: classes.drawerWidth }}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MuiDrawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerWidth }}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Drawer;
