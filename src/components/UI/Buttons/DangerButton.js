import { makeStyles } from '@material-ui/core';
import Button from './Button';

/**
 * Creates the styles that can be used by the DangerButton component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  dangerButton: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
    '&:active': {
      backgroundColor: theme.palette.error.light,
    },
  },
}));

/**
 * Renders a danger button, using the error colors of the theme's palette
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const DangerButton = (props) => {
  const classes = useStyles();

  return (
    <Button color="primary" classes={{ containedPrimary: classes.dangerButton }} {...props}>
      {props.children}
    </Button>
  );
};

export default DangerButton;
