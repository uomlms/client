import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import Page from './UI/Page';
import TextField from './UI/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {};
});

const COURSES = [
  { name: 'Course 1' },
  { name: 'Course 2' },
  { name: 'Course 3' },
  { name: 'Course 4' },
];

const Home = () => {
  const classes = useStyles();

  const courses = COURSES.map((course) => {
    return (
      <ListItem key={course.name}>
        <ListItemText primary={course.name} />
      </ListItem>
    );
  });

  return (
    <Page>
      <Box border={1} borderRadius={10} borderColor="grey.300" p={1} height={1}>
        <Grid container>
          <Grid item md={3}>
            <Box display="flex" alignItems="center">
              <SearchIcon />
              <TextField label="Search" type="search" fullWidth />
            </Box>
          </Grid>
          <Grid item md={9}>
            <Box height={1} display="flex" alignItems="center" justifyContent="flex-end">
              <Button color="primary" variant="contained">
                Create
              </Button>
            </Box>
          </Grid>
          <Grid item md={3}>
            <List>{courses}</List>
          </Grid>
          <Grid item md={9}>
            Test
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
