import { makeStyles } from '@material-ui/core';
import Button from './Button';

/**
 * Creates the styles that can be used by the SuccessButton component
 *
 * @returns {object}
 */
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

/**
 * Renders a success button, using the success colors of the theme's palette
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const SuccessButton = (props) => {
  const classes = useStyles();

  return (
    <Button color="primary" classes={{ containedPrimary: classes.successButton }} {...props}>
      {props.children}
    </Button>
  );
};

export default SuccessButton;
