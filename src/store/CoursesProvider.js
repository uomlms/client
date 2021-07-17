import { useReducer } from 'react';
import CoursesContext from './courses-context';

/**
 * Defines the actions that can be applied to the Courses Context
 * The actions are:
 *  - CREATE
 *  - DELETE
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const coursesReducer = (state, action) => {
  let updatedCourses = [...state];

  // Implements the creation of a course
  if (action.type === 'CREATE') {
    const newCourse = { ...action.course };
    // temporary id for courses length + 1
    newCourse.id = updatedCourses.length + 1;
    updatedCourses.push(newCourse);
    return updatedCourses;
  }

  // Implements the deletion of a course
  if (action.type === 'DELETE') {
    // const existingCourseIndex = state.findIndex((course) => course.id === action.id);
    // const existingCourse = updateCourses[existingCourseIndex];
    // delete existingCourse;
    updatedCourses = state.filter((course) => course.id !== action.id);
    return updatedCourses;
  }

  return state;
};

/**
 * Defines the courses provider that is used to make the courses context available to other components
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CoursesProvider = (props) => {
  const [coursesState, dispatchCourseAction] = useReducer(coursesReducer, props.courses);

  /**
   * Creates the given course
   *
   * @param {object} course
   */
  const createCourse = (course) => {
    dispatchCourseAction({ type: 'CREATE', course: course });
  };

  /**
   * Deletes the course with the given id
   *
   * @param {string} id
   */
  const deleteCourse = (id) => {
    dispatchCourseAction({ type: 'DELETE', id: id });
  };

  const coursesContext = {
    courses: coursesState,
    createCourse: createCourse,
    deleteCourse: deleteCourse,
  };

  return <CoursesContext.Provider value={coursesContext}>{props.children}</CoursesContext.Provider>;
};

export default CoursesProvider;
