import React from 'react';
import AppBar from '../UI/AppBar';
import MainContent from '../UI/MainContent';

const AnonymousLayout = (props) => {
  return (
    <React.Fragment>
      <AppBar isAuthenticated={false} />
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default AnonymousLayout;
