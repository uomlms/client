import AssignmentForm from './AssignmentForm';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';

/**
 * Renders the Create Assignment modal from which the user can create an assignment
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CreateAssignmentModal = (props) => {
  return (
    <Dialog
      {...props}
      title="Create assignment"
      maxWidth="md"
      actions={<SuccessButton>Create</SuccessButton>}
    >
      <AssignmentForm />
    </Dialog>
  );
};

export default CreateAssignmentModal;
