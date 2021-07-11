import React, { useState } from 'react';
import Drawer from '../UI/Drawer';
import AppBar from '../UI/AppBar';
import MainContent from '../UI/MainContent';

/**
 * Renders the layout that an authenticated user will see
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AuthenticatedLayout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /**
   * Toggles the side drawer of the application
   */
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar
        isAuthenticated={true}
        currentUser={props.currentUser}
        onToggleClick={handleDrawerToggle}
      />
      <Drawer open={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <MainContent isAuthenticated={true}>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default AuthenticatedLayout;
