import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import Button from '../components/UI/Buttons/Button';

/**
 * Creates the style that can be used by the Home component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  card: {
    // height: '100%',
    padding: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: theme.palette.grey[300],
  },
  avatarSize: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

/**
 * Renders the Home page, in which the user sees an overview of the functionalities
 * that the application provides
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const Home = ({ currentUser, noCourses }) => {
  const classes = useStyles();

  const coursesHeader = (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Typography variant="h4">Courses</Typography>
      </Box>
      <Chip color="secondary" label={<Typography variant="h6">{noCourses}</Typography>}></Chip>
    </Box>
  );

  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <Card className={classes.card} raised>
          <CardHeader title={coursesHeader} />
          <CardContent>
            <Typography>
              Navigate through your courses. Select a course and navigate through its assignments,
              submit an assignment or observe your assignment history.
            </Typography>
          </CardContent>
          <CardActions>
            <Box width={1} display="flex" justifyContent="flex-end">
              <Link href="/courses" passHref>
                <Button color="secondary">Go to courses</Button>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card className={classes.card} raised>
          <CardHeader title={<Typography variant="h4">User information</Typography>} />
          <CardContent>
            <Box display="flex" alignItems="center">
              <Box m={1}>
                <Avatar className={classes.avatarSize} />
              </Box>
              <Box m={1}>
                <Typography>
                  <strong>Name: </strong>
                  {currentUser.name}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {currentUser.email}
                </Typography>
                <Typography>
                  <strong>Role: </strong>
                  {currentUser.role}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
