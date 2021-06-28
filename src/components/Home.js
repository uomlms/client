import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Page from './UI/Page';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    card: {
      padding: '5px',
      marginLeft: '5px',
      marginRight: '5px',
    },
  };
});

const Home = () => {
  const classes = useStyles();

  return (
    <Page>
      <div className={classes.root}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Paper className={classes.card} variant="outlined">
              Announcenments
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.card} variant="outlined">
              Statistics
            </Paper>
          </Grid>
        </Grid>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Paper className={classes.card} variant="outlined">
              Profile
            </Paper>
          </Grid>
          <Grid item>
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
