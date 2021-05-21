import React from 'react';
import Drawer from '../UI/Drawer';
import AppBar from '../UI/AppBar';

const Layout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar onToggleClick={handleDrawerToggle} />
      <Drawer open={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
