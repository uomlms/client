import { forwardRef } from 'react';
import { Button as MuiButton } from '@material-ui/core';

/**
 * Renders a custom Material UI button setting the following default props:
 *  - variant=contained
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Button = forwardRef((props, ref) => {
  return (
    <MuiButton variant="contained" {...props} ref={ref}>
      {props.children}
    </MuiButton>
  );
});

export default Button;
