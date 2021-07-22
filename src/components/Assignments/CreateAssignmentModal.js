import { useState, useContext } from 'react';
import AssignmentForm from './AssignmentForm';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';
import AssignmentsContext from '../../store/assignments-context';

/**
 * Renders the Create Assignment modal from which the user can create an assignment
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CreateAssignmentModal = (props) => {
  const emptyAssignmentState = {
    title: '',
    dueDate: '',
    description: '',
    course_id: 1,
  };
  const assignmentsCtx = useContext(AssignmentsContext);
  const [newAssignment, setNewAssignment] = useState(emptyAssignmentState);

  /**
   * Handles the change of an assignment field in the assignment form
   *
   * @param {object} event
   * @param {string} field
   */
  const handleAssignmentFieldChanged = (event, field) => {
    const updatedNewAssignment = { ...newAssignment };
    updatedNewAssignment[field] = event.target.value;
    setNewAssignment(updatedNewAssignment);
  };

  /**
   * Handles the click event of the Create button
   */
  const handleCreateClicked = () => {
    assignmentsCtx.create(newAssignment);
    setNewAssignment(emptyAssignmentState);
    props.onClose();
  };

  return (
    <Dialog
      {...props}
      title="Create assignment"
      maxWidth="md"
      actions={<SuccessButton onClick={handleCreateClicked}>Create</SuccessButton>}
    >
      <AssignmentForm
        assignment={newAssignment}
        handleAssignmentFieldChanged={handleAssignmentFieldChanged}
      />
    </Dialog>
  );
};

export default CreateAssignmentModal;
