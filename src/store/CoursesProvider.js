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
  if (action.type === 'CREATE') {
    const newCourse = { ...action.course };
    const updatedCourses = [...state];
    // temporary id for courses length + 1
    newCourse.id = updatedCourses.length + 1;
    updatedCourses.push(newCourse);
    return updatedCourses;
  }

  if (action.type === 'DELETE') {
    console.log('delete course action', state);
    // const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    // const existingCartItem = state.items[existingCartItemIndex];
    // const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    // let updatedItems;
    // if (existingCartItem.amount === 1) {
    //   updatedItems = state.items.filter((item) => item.id !== action.id);
    // } else {
    //   const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
    //   updatedItems = [...state.items];
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // }
    return state;
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
  const [coursesState, dispatchCartAction] = useReducer(coursesReducer, props.courses);

  /**
   * Creates the given course
   *
   * @param {object} course
   */
  const createCourse = (course) => {
    dispatchCartAction({ type: 'CREATE', course: course });
  };

  const deleteCourse = (id) => {
    dispatchCartAction({ type: 'DELETE', id: id });
  };

  const coursesContext = {
    courses: coursesState,
    createCourse: createCourse,
    deleteCourse: deleteCourse,
  };

  return <CoursesContext.Provider value={coursesContext}>{props.children}</CoursesContext.Provider>;
};

export default CoursesProvider;
