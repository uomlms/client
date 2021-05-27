import React, { useState } from 'react';
import Drawer from '../UI/Drawer';
import AppBar from '../UI/AppBar';
import MainContent from '../UI/MainContent';

const AuthenticatedLayout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar isAuthenticated={true} onToggleClick={handleDrawerToggle} />
      <Drawer open={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default AuthenticatedLayout;
