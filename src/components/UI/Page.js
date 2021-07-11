import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

/**
 * Creates the styles that can be used by the Page component
 *
 * @returns {object}
 */
const useStyles = makeStyles(() => ({
  page: {
    minHeight: '90%',
    margin: '5px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
}));

/**
 * Renders a wrapper element that can be used by pages
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Page = (props) => {
  const classes = useStyles();

  return <Paper className={classes.page}>{props.children}</Paper>;
};

export default Page;
