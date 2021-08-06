import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../UI/Buttons/Button';
import AssignmentTable from './AssignmentTable';
import CreateAssignmentModal from './CreateAssignmentModal';
import useModal from '../../hooks/use-modal';
import useRequest from '../../hooks/use-request';

/**
 * Renders the information and actions for the assignments of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Assignments = ({ course }) => {
  const [assignments, setAssignments] = useState([]);
  const modal = useModal();
  const { sendRequest } = useRequest({
    url: `/api/courses/${course?.id}/assignments`,
    method: 'get',
  });

  useEffect(() => {
    /**
     * Sends a request to the courses service to get the assignments of
     * the selected course and updates the assignments state
     */
    const getAssignments = async () => {
      const newAssignments = await sendRequest();
      setAssignments(newAssignments);
    };

    getAssignments();
  }, [course]);

  /**
   * Adds the new given assignment to the assignments state
   *
   * @param {object} newAssignment
   */
  const createAssignment = (newAssignment) => {
    setAssignments((prevAssignments) => {
      const updatedAssignments = [...prevAssignments];
      updatedAssignments.push(newAssignment);
      return updatedAssignments;
    });
  };

  /**
   * Update the given assignment it the assignments state
   *
   * @param {object} updatedAssignment
   */
  const updateAssignment = (updatedAssignment) => {
    setAssignments((prevAssignments) => {
      const updatedAssignments = [...prevAssignments];
      const existingAssignmentIndex = updatedAssignments.findIndex(
        (assignment) => assignment.id === updatedAssignment.id
      );
      updatedAssignments[existingAssignmentIndex] = { ...updatedAssignment };
      return updatedAssignments;
    });
  };

  /**
   * Removes the assignment with the given assignment id from the assignment state
   *
   * @param {string} assignmentId
   */
  const deleteAssignment = (assignmentId) => {
    setAssignments((prevAssignments) => {
      let updatedAssignments = [...prevAssignments];
      updatedAssignments = updatedAssignments.filter(
        (assignment) => assignment.id !== assignmentId
      );
      return updatedAssignments;
    });
  };

  return (
    <Box mt={2}>
      <Box my={1} display="flex">
        <Box flexGrow={1}>
          <Typography variant="h5" component="h5">
            Assignmnents
          </Typography>
        </Box>
        <Button color="primary" onClick={modal.open}>
          Create assignment
        </Button>
      </Box>
      <AssignmentTable
        assignments={assignments}
        updateAssignment={updateAssignment}
        deleteAssignment={deleteAssignment}
      />
      <CreateAssignmentModal
        open={modal.visible}
        onClose={modal.close}
        course={course}
        createAssignment={createAssignment}
      />
    </Box>
  );
};

export default Assignments;
