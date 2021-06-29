import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Page from './UI/Page';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      height: '100%',
    },
    card: {
      height: '100%',
      padding: '5px',
      marginLeft: '5px',
      marginRight: '5px',
      backgroundColor: theme.palette.grey[300],
    },
  };
});

const Home = () => {
  const classes = useStyles();

  return (
    <Page>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Paper className={classes.card} variant="outlined">
              Announcenments
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.card} variant="outlined">
              Statistics
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.card} variant="outlined">
              Profile
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.card} variant="outlined">
              Notifications
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default Home;
