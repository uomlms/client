import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import AssignmentForm from './AssignmentForm';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';
import useRequest from '../../hooks/use-request';
import useAssignmentData from '../../hooks/use-assignment-data';

/**
 * Renders the Create Assignment modal from which the user can create an assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const CreateAssignmentModal = ({ course, createAssignment, modalProps }) => {
  const { assignmentData, clearAssignmentData, handleAssignmentFieldChanged } = useAssignmentData();

  /**
   * Handles the execution and the errors of the POST request to the courses services
   * that creates an assignment.
   *
   * @type {Object}
   */
  const { sendRequest, errors } = useRequest({
    url: `/api/courses/${course?.id}/assignments`,
    method: 'post',
    body: { ...assignmentData },
  });

  /**
   * Handles the click event of the Create button.
   * Sends a POST request to the courses service creating the assignment
   * and adds it to the assignment state.
   */
  const handleCreateClicked = async () => {
    const newAssignment = await sendRequest();
    if (!newAssignment) {
      return;
    }

    clearAssignmentData();
    createAssignment(newAssignment);
    modalProps.onClose();
  };

  const errorMessages =
    errors &&
    errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <Dialog
      {...modalProps}
      title="Create assignment"
      maxWidth="md"
      actions={<SuccessButton onClick={handleCreateClicked}>Create</SuccessButton>}
    >
      {errorMessages}
      <AssignmentForm
        assignment={assignmentData}
        handleAssignmentFieldChanged={handleAssignmentFieldChanged}
      />
    </Dialog>
  );
};

export default CreateAssignmentModal;
