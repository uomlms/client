import { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  selectedCourseItem: {
    borderRight: `3px solid ${theme.palette.secondary.light}`,
  },
}));

const CoursesList = (props) => {
  const { courses } = props;
  const [activeCourse, setActiveCourse] = useState();
  const classes = useStyles();

  useEffect(() => {
    if (courses.length >= 0) {
      setActiveCourse(courses[0]);
    }
  }, []);

  const handleChangeActiveCourse = (newActiveCourse) => {
    setActiveCourse(newActiveCourse);
  };

  return (
    <List>
      {courses.map((course) => (
        <ListItem
          button
          key={course.id}
          selected={activeCourse?.id === course.id}
          classes={{
            selected: classes.selectedCourseItem,
          }}
          onClick={() => handleChangeActiveCourse(course)}
        >
          <ListItemText primary={course.name} secondary={course.professor} />
        </ListItem>
      ))}
    </List>
  );
};

export default CoursesList;
