import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    mainContent: {
      height: '100%',
    },
    appBarMargin: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.drawer.smWidth,
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.drawer.mdWidth,
      },
    },
  };
});

const MainContent = (props) => {
  const classes = useStyles();

  const mainClasses = [classes.mainContent, props.isAuthenticated ? classes.appBarMargin : null];

  return (
    <main className={mainClasses.join(' ')}>
      <div className={classes.toolbar}></div>
      {props.children}
    </main>
  );
};

export default MainContent;
