import { useState } from 'react';

/**
 * Handles the data and state of the given assignment
 *
 * @param {object} currentAssignment
 * @returns {object}
 */
const useAssignmentData = (currentAssignment) => {
  const defaultAssignmentState = {
    type: 'obligatory',
    name: '',
    deadline: '',
    description: '',
  };
  if (!currentAssignment) {
    currentAssignment = defaultAssignmentState;
  }

  const [assignmentData, setAssignmentData] = useState({ ...currentAssignment });

  /**
   * Sets the assignment data to the default assignment state
   */
  const clearAssignmentData = () => {
    setAssignmentData(defaultAssignmentState);
  };

  /**
   * Handles the change of an assignment field in the assignment form
   *
   * @param {object} event
   * @param {string} field
   */
  const handleAssignmentFieldChanged = (event, field) => {
    setAssignmentData((prevAssignmentData) => {
      const updatedAssignmentData = { ...prevAssignmentData };
      updatedAssignmentData[field] = event.target.value;
      return updatedAssignmentData;
    });
  };

  return { assignmentData, setAssignmentData, handleAssignmentFieldChanged, clearAssignmentData };
};

export default useAssignmentData;
