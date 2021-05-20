import React from 'react';
import Drawer from './Drawer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Drawer />
      <main>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;