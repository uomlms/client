import React from 'react';
import Drawer from '../UI/Drawer';
import AppBar from '../UI/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = (props) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar onToggleClick={handleDrawerToggle} />
      <Drawer open={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className="h-100">
        <div className={classes.toolbar}></div>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
