import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      minHeight: '90%',
      margin: '5px',
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
    },
  };
});

const Page = (props) => {
  const classes = useStyles();

  return <Paper className={classes.page}>{props.children}</Paper>;
};

export default Page;
