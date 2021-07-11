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

/**
 * Creates the style that can be used by the Drawer component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => {
  return {
    drawerWidth: {
      width: '240px',
    },
    selectedMenuItem: {
      borderRight: `3px solid ${theme.palette.primary.light}`,
    },
  };
});

/**
 * Renders the side drawer of the application
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Drawer = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const drawer = (
    <React.Fragment>
      <Toolbar />
      <List component="nav">
        <Link href="/">
          <ListItem
            button
            key="home"
            selected={router.pathname === '/'}
            classes={{
              selected: classes.selectedMenuItem,
            }}
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
            selected={router.pathname === '/courses'}
            classes={{
              selected: classes.selectedMenuItem,
            }}
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
