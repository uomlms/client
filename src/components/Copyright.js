import React from 'react';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Copyright = () => {
  return ( 
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.uom.gr/">
        University of Macedonia
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

 
export default Copyright;