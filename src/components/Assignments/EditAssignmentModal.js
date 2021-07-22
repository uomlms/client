import AssignmentForm from './AssignmentForm';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';

/**
 * Renders the Edit Assignment modal from which the user can edit an assignment
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const EditAssignmentModal = (props) => {
  const { assignment } = props;

  return (
    <Dialog
      {...props}
      title="Edit assignment"
      maxWidth="md"
      actions={<SuccessButton>Save</SuccessButton>}
    >
      <AssignmentForm assignment={assignment} />
    </Dialog>
  );
};

export default EditAssignmentModal;
