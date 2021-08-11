import React, { useState, useEffect, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../UI/Buttons/Button';
import AssignmentTable from './AssignmentTable';
import CreateAssignmentModal from './CreateAssignmentModal';
import useModal from '../../hooks/use-modal';
import useRequest from '../../hooks/use-request';
import useClient from '../../hooks/use-client';

/**
 * Renders the information and actions for the assignments of the selected course
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const Assignments = ({ course, isStaff }) => {
  const [assignments, setAssignments] = useState([]);
  const modal = useModal();
  const client = useClient();

  /**
   * Handles the execution and the errors of the GET request to the courses service
   * that return every course.
   *
   * @type {Object}
   */
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
   * Uploads the configuration file for the given assignment
   *
   * @param {Object} assignment
   */
  const uploadConfigFile = async (assignment, configFile) => {
    try {
      await client.post(
        `/api/courses/${course.id}/assignments/${assignment.id}/upload/config`,
        new FormData().append('assignment', assignment.id).append('config', configFile),
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Adds the new given assignment to the assignments state
   *
   * @param {Object} newAssignment
   */
  const createAssignment = useCallback(
    (newAssignment) => {
      setAssignments((prevAssignments) => {
        const updatedAssignments = [...prevAssignments];
        updatedAssignments.push(newAssignment);
        return updatedAssignments;
      });
    },
    [assignments]
  );

  /**
   * Update the given assignment it the assignments state
   *
   * @param {Object} updatedAssignment
   */
  const updateAssignment = useCallback(
    (updatedAssignment) => {
      setAssignments((prevAssignments) => {
        const updatedAssignments = [...prevAssignments];
        const existingAssignmentIndex = updatedAssignments.findIndex(
          (assignment) => assignment.id === updatedAssignment.id
        );
        updatedAssignments[existingAssignmentIndex] = { ...updatedAssignment };
        return updatedAssignments;
      });
    },
    [assignments]
  );

  /**
   * Removes the assignment with the given assignment id from the assignment state
   *
   * @param {string} assignmentId
   */
  const deleteAssignment = useCallback(
    (assignmentId) => {
      setAssignments((prevAssignments) => {
        let updatedAssignments = [...prevAssignments];
        updatedAssignments = updatedAssignments.filter(
          (assignment) => assignment.id !== assignmentId
        );
        return updatedAssignments;
      });
    },
    [assignments]
  );

  return (
    <Box mt={2}>
      <Box my={1} display="flex">
        <Box flexGrow={1}>
          <Typography variant="h5" component="h5">
            Assignmnents
          </Typography>
        </Box>
        {isStaff && (
          <Button color="primary" onClick={modal.open}>
            Create assignment
          </Button>
        )}
      </Box>
      <AssignmentTable
        assignments={assignments}
        updateAssignment={updateAssignment}
        deleteAssignment={deleteAssignment}
        uploadConfigFile={uploadConfigFile}
        isStaff={isStaff}
      />
      {isStaff && (
        <CreateAssignmentModal
          modalProps={{
            open: modal.visible,
            onClose: modal.close,
          }}
          course={course}
          createAssignment={createAssignment}
          uploadConfigFile={uploadConfigFile}
        />
      )}
    </Box>
  );
};

export default React.memo(Assignments);
