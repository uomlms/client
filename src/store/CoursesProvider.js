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
    console.log('create course action', state);
    // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    // const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    // const existingCartItem = state.items[existingCartItemIndex];
    // let updatedItems;
    // if (existingCartItem) {
    //   const updatedItem = {
    //     ...existingCartItem,
    //     amount: existingCartItem.amount + action.item.amount,
    //   };
    //   updatedItems = [...state.items];
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // } else {
    //   updatedItems = state.items.concat(action.item);
    // }
    return state;
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
