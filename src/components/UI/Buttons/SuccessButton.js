import { makeStyles } from '@material-ui/core';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
  successButton: {
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
    '&:active': {
      backgroundColor: theme.palette.success.light,
    },
  },
}));

const SuccessButton = (props) => {
  const classes = useStyles();

  return (
    <Button color="primary" classes={{ containedPrimary: classes.successButton }} {...props}>
      {props.children}
    </Button>
  );
};

export default SuccessButton;
