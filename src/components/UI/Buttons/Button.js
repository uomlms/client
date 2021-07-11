import { Button as MuiButton } from '@material-ui/core';

const Button = (props) => {
  return (
    <MuiButton variant="contained" {...props}>
      {props.children}
    </MuiButton>
  );
};

export default Button;
