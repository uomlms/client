import { useState, useMemo } from 'react';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import { DropzoneArea } from 'material-ui-dropzone';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';
import useRequest from '../../hooks/use-request';

/**
 * Renders the Submit Assignment modal from which the user can submit an assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const SubmitAssignmentModal = (props) => {
  const [file, setFile] = useState();

  // The form data used in the submit assignment request
  const formData = new FormData();
  formData.append('source', file);

  /**
   * Handles the execution and the errors of the POST request to the courses services
   * that submits an assignment.
   *
   * @type {Object}
   */
  const { sendRequest, errors } = useRequest({
    url: `/api/courses/${props.assignment.course}/assignments/${props.assignment.id}/submit`,
    method: 'post',
    body: formData,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  });

  /**
   * Submits the assignment with the solution file that the user uploaded.
   * Send a POST request to the courses service that submits the assignments and
   * execute the file the user uploaded.
   */
  const handleSubmitClicked = async () => {
    const response = await sendRequest();
    if (!response) {
      return;
    }

    setFile(null);
    props.modalProps.onClose();
  };

  const errorMessages =
    errors &&
    errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <div>
      <Dialog
        {...props.modalProps}
        title={`Submit assignment ${props.assignment.name}`}
        maxWidth="md"
        actions={<SuccessButton onClick={handleSubmitClicked}>Submit</SuccessButton>}
      >
        {errorMessages}
        <DropzoneArea
          dropzoneText="Drag and drop the solution file for this assignment"
          filesLimit={1}
          showAlerts={false}
          showFileNames={true}
          onChange={(files) => setFile(files.pop())}
        />
      </Dialog>
    </div>
  );
};

export default SubmitAssignmentModal;
