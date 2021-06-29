import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer as MuiDrawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => {
  return {
    drawerWidth: {
      width: '240px',
    },
    activeLink: {
      backgroundColor: theme.palette.primary.light,
    },
  };
});

const Drawer = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const drawer = (
    <React.Fragment>
      <Toolbar />
      <List>
        <Link href="/">
          <ListItem
            button
            key="home"
            className={router.pathname === '/' ? classes.activeLink : null}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link href="/courses">
          <ListItem
            button
            key="courses"
            className={router.pathname === '/courses' ? classes.activeLink : null}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
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
        <MuiDrawer variant="permanent" open classes={{ paper: classes.drawerWidth }}>
          {drawer}
        </MuiDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Drawer;
