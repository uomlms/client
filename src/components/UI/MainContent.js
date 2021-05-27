import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    mainContent: {
      height: '100%',
      padding: '10px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: '240px',
      },
    },
  };
});

const MainContent = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.mainContent}>
      <div className={classes.toolbar}></div>
      {props.children}
    </main>
  );
};

export default MainContent;
