import Typography from '@material-ui/core/Typography';
import Dialog from '../UI/Dialog';
import DangerButton from '../UI/Buttons/DangerButton';
import useRequest from '../../hooks/use-request';

/**
 * Renders the delete assignment modal that asks the users if they are sure they
 * want to delete the selected assignment.
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const DeleteAssignmentModal = (props) => {
  const { assignment, deleteAssignment } = props;
  const { sendRequest } = useRequest({
    url: `/api/courses/${assignment.course}/assignments/${assignment.id}`,
    method: 'delete',
  });

  /**
   * Handles the click event of the Delete button.
   * Sends a DELETE request to the courses services deleting the assignment and removes
   * it from the assignment state.
   */
  const handleDeleteClicked = async () => {
    await sendRequest();
    deleteAssignment(assignment.id);
    props.onClose();
  };

  return (
    <Dialog
      {...props}
      title={`Delete ${assignment?.name}`}
      maxWidth="sm"
      actions={<DangerButton onClick={handleDeleteClicked}>Delete</DangerButton>}
    >
      <Typography variant="subtitle1">
        Are you sure you want to delete the assignment {`${assignment?.name}`}?
      </Typography>
    </Dialog>
  );
};

export default DeleteAssignmentModal;
