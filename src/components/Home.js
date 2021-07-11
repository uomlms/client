import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Page from './UI/Page';
import { makeStyles } from '@material-ui/core';

/**
 * Creates the style that can be used by the Home component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    padding: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: theme.palette.grey[300],
  },
}));

/**
 * Renders the Home page, in which the user sees an overview of the functionalities
 * that the application provides
 *
 * @returns {JSX.Element}
 */
const Home = () => {
  const classes = useStyles();

  return (
    <Page>
      <Box flexGrow={1} display="flex">
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
      </Box>
    </Page>
  );
};

export default Home;
