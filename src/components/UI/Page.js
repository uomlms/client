import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      position: 'absolute',
      right: '0',
      bottom: '0',
      top: theme.appBar.height,
      [theme.breakpoints.down('sm')]: {
        left: theme.drawer.smWidth,
      },
      [theme.breakpoints.up('md')]: {
        left: theme.drawer.mdWidth,
      },
      margin: '5px',
      padding: '5px',
    },
  };
});

const Page = (props) => {
  const classes = useStyles();

  return <Paper className={classes.page}>{props.children}</Paper>;
};

export default Page;
