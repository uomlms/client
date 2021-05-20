import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

import classes from './Layout.module.scss';

// const useStyles = makeStyles((theme) => {
//   return {
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//     },
//   };
// });

const Layout = (props) => {
  // const classesUseStyles = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classesUseStyles.toolbar} /> */}
      <List>
        <ListItem button key="log-in">
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText primary={"Log in"} />
        </ListItem>

        <ListItem button key="sign-up">
          {/* <ListItemIcon></ListItemIcon> */}
          <ListItemText primary="Sign up" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            UOMLMS
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor='left'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            classes={{ paper: classes.drawer }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open classes={{ paper: classes.drawer }}>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <main className={classesUseStyles.content}> */}
      <main>
        {/* <div className={classesUseStyles.toolbar} /> */}
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
