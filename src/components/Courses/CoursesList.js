import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

/**
 * Creates the style that can be used by the CoursesList component
 *
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  selectedCourseItem: {
    borderRight: `3px solid ${theme.palette.secondary.light}`,
  },
}));

/**
 * Renders the list of the availiable courses
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CoursesList = ({ courses, selectedCourse, handleSelectCourse }) => {
  const classes = useStyles();

  let coursesList = (
    <Box>
      <Alert severity="info">No courses found</Alert>
    </Box>
  );
  if (courses.length > 0) {
    coursesList = (
      <List>
        {courses.map((course) => (
          <ListItem
            button
            key={course.id}
            selected={selectedCourse?.id === course.id}
            classes={{
              selected: classes.selectedCourseItem,
            }}
            onClick={() => handleSelectCourse(course)}
          >
            <ListItemText primary={course.name} secondary={course.professor} />
          </ListItem>
        ))}
      </List>
    );
  }

  return coursesList;
};

export default CoursesList;
