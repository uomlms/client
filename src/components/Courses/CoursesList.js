import { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import CoursesContext from '../../context/courses-context';

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
const CoursesList = ({ selectedCourse, handleSelectCourse }) => {
  const classes = useStyles();
  const coursesCtx = useContext(CoursesContext);

  return (
    <List>
      {coursesCtx.courses.map((course) => (
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
};

export default CoursesList;
