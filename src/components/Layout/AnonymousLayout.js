import React from 'react';
import AppBar from '../UI/AppBar';
import MainContent from '../UI/MainContent';

/**
 * Renders the layout that an anonymous user will see
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AnonymousLayout = (props) => {
  return (
    <React.Fragment>
      <AppBar title={props.title} isAuthenticated={false} />
      <MainContent isAuthenticated={false}>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default AnonymousLayout;
