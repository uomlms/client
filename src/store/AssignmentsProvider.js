import { useReducer } from 'react';
import AssignmentsContext from './assignments-context';

/**
 * Defines the actions that can be applied to the Assigments Context
 * The actions are:
 *  - SET
 *  - CREATE
 *  - UPDATE
 *  - REMOVE
 *
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const assignmentsReducer = (state, action) => {
  let updatedAssignments = state instanceof Array ? [...state] : [];

  // Implements the set action of the assignments state
  if (action.type === 'SET') {
    return [...action.assignments];
  }

  // Implements the creation of a assignment
  if (action.type === 'CREATE') {
    const newAssignment = { ...action.assignment };
    // temporary id for courses length + 1
    newAssignment.id = updatedAssignments.length + 1;
    updatedAssignments.push(newAssignment);
    return updatedAssignments;
  }

  // Implements the deletion of a assignment
  if (action.type === 'REMOVE') {
    // const existingAssignmentIndex = state.findIndex((assignment) => assignment.id === action.id);
    // const existingAssigment = updateCourses[existingAssignmentIndex];
    // delete existingAssigment;
    updatedAssignments = updatedAssignments.filter((assignment) => assignment.id !== action.id);
    return updatedAssignments;
  }

  // Implements the update of a assignment
  if (action.type === 'UPDATE') {
    const existingAssignmentIndex = updatedAssignments.findIndex(
      (assignment) => assignment.id === action.assignment.id
    );
    updatedAssignments[existingAssignmentIndex] = { ...action.assignment };
    return updatedAssignments;
  }

  return state;
};

/**
 * Defines the assignments provider that is used to make the assignments
 * context available to other components
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AssignmentsProvider = (props) => {
  const [assignmentsState, dispatchAssignmentAction] = useReducer(
    assignmentsReducer,
    props.assignments
  );

  /**
   * Sets the assignments state with the assignments
   *
   * @param {array} assignments
   */
  const set = (assignments) => {
    dispatchAssignmentAction({ type: 'SET', assignments: assignments });
  };

  /**
   * Creates the given assignment
   *
   * @param {object} assignment
   */
  const create = (assignment) => {
    dispatchAssignmentAction({ type: 'CREATE', assignment: assignment });
  };

  /**
   * Updates the given assignment
   *
   * @param {object} assignment
   */
  const update = (assignment) => {
    dispatchAssignmentAction({ type: 'UPDATE', assignment: assignment });
  };

  /**
   * Deletes the assignment with the given id
   *
   * @param {string} id
   */
  const remove = (id) => {
    dispatchAssignmentAction({ type: 'REMOVE', id: id });
  };

  const assignmentsContext = {
    assignments: assignmentsState,
    set: set,
    create: create,
    update: update,
    remove: remove,
  };

  return (
    <AssignmentsContext.Provider value={assignmentsContext}>
      {props.children}
    </AssignmentsContext.Provider>
  );
};

export default AssignmentsProvider;
