import React from 'react';

/**
 * Courses context state management
 * It holds all the courses and some utility functions like createCourse,
 * updateCourse and deleteCourse
 */
const CoursesContext = React.createContext({
  courses: [],
  createCourse: (course) => {},
  updateCourse: (course) => {},
  deleteCourse: (id) => {},
});

export default CoursesContext;
