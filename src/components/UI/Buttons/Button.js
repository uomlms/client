import { Button as MuiButton } from '@material-ui/core';

/**
 * Renders a custom Material UI button setting the following default props:
 *  - variant=contained
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Button = (props) => {
  return (
    <MuiButton variant="contained" {...props}>
      {props.children}
    </MuiButton>
  );
};

export default Button;
