import React from 'react';
import { AppBar as MuiAppBar } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppBar = (props) => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Hidden smUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.onToggleClick}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" noWrap>
          UOMLMS
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
