import React from 'react';

/**
 * Assigments context state management
 * It holds all the assignments of the selected course and some utility
 * functions like set, create, update and remove
 */
const AssignmentsContext = React.createContext({
  assignments: [],
  set: (assignments) => {},
  create: (assignment) => {},
  update: (assignment) => {},
  remove: (id) => {},
});

export default AssignmentsContext;
