import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../UI/Buttons/Button';
import AssignmentTable from './AssignmentTable';
import AssignmentModal from './AssignmentModal';
import DeleteAssignmentModal from './DeleteAssignmentModal';
import useModal from '../../hooks/use-modal';

/**
 * Renders the information and actions for the assignments of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Assignments = ({ assignments }) => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const assignmentModal = useModal();
  const deleteModal = useModal();

  /**
   * Handles the click event of the CREATE ASSIGNMENT button.
   * Sets the selected assignment to null and opens the Assignment modal.
   */
  const handleCreateAssignmentClicked = () => {
    setSelectedAssignment(null);
    assignmentModal.open();
  };

  /**
   * Handles the click event of the EDIT ASSIGNMENT button on the table row.
   *
   * @param {object} assignment
   */
  const handleEditAssignmentClicked = (assignment) => {
    setSelectedAssignment(assignment);
    assignmentModal.open();
  };

  /**
   * Handles the click event of the DELETE ASSIGNMENT button on the table row.
   *
   * @param {object} assignment
   */
  const handleDeleteAssignmentClicked = (assignment) => {
    setSelectedAssignment(assignment);
    deleteModal.open();
  };

  return (
    <Box mt={2}>
      <Box my={1} display="flex">
        <Box flexGrow={1}>
          <Typography variant="h5" component="h5">
            Assignmnents
          </Typography>
        </Box>
        <Button color="primary" onClick={handleCreateAssignmentClicked}>
          Create assignment
        </Button>
      </Box>
      <AssignmentTable
        assignments={assignments}
        onEditAssignment={handleEditAssignmentClicked}
        onDeleteAssignment={handleDeleteAssignmentClicked}
      />
      <AssignmentModal
        open={assignmentModal.visible}
        onClose={assignmentModal.close}
        assignment={selectedAssignment}
      />
      <DeleteAssignmentModal
        open={deleteModal.visible}
        onClose={deleteModal.close}
        assignment={selectedAssignment}
      />
    </Box>
  );
};

export default Assignments;
