import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  selectedCourseItem: {
    borderRight: `3px solid ${theme.palette.secondary.light}`,
  },
}));

const CoursesList = ({ courses, selectedCourse, handleSelectCourse }) => {
  const classes = useStyles();

  return (
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
};

export default CoursesList;
