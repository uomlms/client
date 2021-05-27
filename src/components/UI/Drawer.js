import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer as MuiDrawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
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
        <Link href="/">
          <ListItem button key="home">
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link href="/courses">
          <ListItem button key="courses">
            <ListItemText>Courses</ListItemText>
          </ListItem>
        </Link>
      </List>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Hidden mdUp implementation="css">
        <MuiDrawer
          variant="temporary"
          open={props.open}
          onClose={props.handleDrawerToggle}
          classes={{ paper: classes.drawerWidth }}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
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
