import Typography from '@material-ui/core/Typography';
import Dialog from '../UI/Dialog';
import DangerButton from '../UI/Buttons/DangerButton';
import useRequest from '../../hooks/use-request';

/**
 * Renders the delete assignment modal that asks the users if they are sure they
 * want to delete the selected assignment.
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const DeleteAssignmentModal = ({ assignment, deleteAssignment, modalProps }) => {
  /**
   * Handles the execution and the errors of the DELETE request to the courses
   * service that deletes the current assignment
   *
   * @type {Object}
   */
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
    modalProps.onClose();
  };

  return (
    <Dialog
      {...modalProps}
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
