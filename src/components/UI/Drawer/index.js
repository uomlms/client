import React from 'react';
import { Drawer as MuiDrawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
// import { makeStyles } from '@material-ui/core/styles';

import classes from './styles.module.scss';

// const useStyles = makeStyles((theme) => {
//   // console.log(theme.br);
//   return {
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       // width: drawerWidth,
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//     },
//   };
// });

const Drawer = (props) => {
  // const classesUseStyles = useStyles();

  const drawer = (
    <React.Fragment>
      <Toolbar />
      <List>
        <ListItem button key="log-in">
          {/* <ListItemIcon>
                  <MailIcon />
                </ListItemIcon> */}
          <ListItemText primary="Log in" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="sign-up">
          {/* <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
          <ListItemText primary="Sign up" />
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
          classes={{ paper: classes['drawer-paper'] }}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MuiDrawer
          variant="permanent"
          open
          classes={{ paper: classes['drawer-paper'] }}
        >
          {drawer}
        </MuiDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Drawer;
