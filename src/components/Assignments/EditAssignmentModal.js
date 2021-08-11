import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import AssignmentForm from './AssignmentForm';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';
import useRequest from '../../hooks/use-request';
import useAssignmentData from '../../hooks/use-assignment-data';

/**
 * Renders the Edit Assignment modal from which the user can edit an assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const EditAssignmentModal = (props) => {
  const [configFile, setConfigFile] = useState();
  const { assignmentData, setAssignmentData, clearAssignmentData, handleAssignmentFieldChanged } =
    useAssignmentData(props.assignment);

  // Sets the assignment data with the data of the current assignment if it's not the same
  if (props.assignment.id !== assignmentData.id) {
    setAssignmentData(props.assignment);
  }

  /**
   * Handles the execution and the erros of the PATCH request to the courses
   * service that updates the current assignment
   *
   * @type {Object}
   */
  const { sendRequest, errors } = useRequest({
    url: `/api/courses/${assignmentData.course}/assignments/${assignmentData.id}`,
    method: 'patch',
    body: { ...assignmentData },
  });

  /**
   * Handles the click event of the Save button.
   * Sends a PATCH request to the courses service updating the current assignments
   * and update it in the assignment state.
   */
  const handleSaveClicked = async () => {
    const updatedAssignment = await sendRequest();
    if (!updatedAssignment) {
      return;
    }

    props.updateAssignment(updatedAssignment);

    if (configFile) {
      props.uploadConfigFile(updatedAssignment, configFile);
    }

    clearAssignmentData();
    props.modalProps.onClose();
  };

  const updateAssignmentError =
    errors &&
    errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <Dialog
      {...props.modalProps}
      title="Edit assignment"
      maxWidth="md"
      actions={<SuccessButton onClick={handleSaveClicked}>Save</SuccessButton>}
    >
      {updateAssignmentError}
      <AssignmentForm
        assignment={assignmentData}
        handleAssignmentFieldChanged={handleAssignmentFieldChanged}
        handleConfigFileChanged={(files) => setConfigFile(files.pop())}
      />
    </Dialog>
  );
};

export default EditAssignmentModal;
