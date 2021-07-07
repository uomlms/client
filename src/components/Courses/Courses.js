import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Page from '../UI/Page';
import TextField from '../UI/TextField';
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';

const COURSES = [
  {
    id: '1',
    name: 'Course 1',
    professor: 'course 1 professor',
    description: 'course 1 description',
  },
  {
    id: '2',
    name: 'Course 2',
    professor: 'course 2 professor',
    description: 'course 2 description',
  },
  {
    id: '3',
    name: 'Course 3',
    professor: 'course 3 professor',
    description: 'course 3 description',
  },
  {
    id: '4',
    name: 'Course 4',
    professor: 'course 4 professor',
    description: 'course 6 description',
  },
];

const Home = () => {
  return (
    <Page>
      {/* find a better way to expand the child element to the min-height */}
      <Box p={1} flexGrow={1}>
        <Grid container spacing={2}>
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
            <CoursesList courses={COURSES} />
          </Grid>
          <Grid item md={9}>
            <CourseDetails />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
