import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import { DropzoneArea } from 'material-ui-dropzone';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';
import useClient from '../../hooks/use-client';

/**
 * Renders the Submit Assignment modal from which the user can submit an assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const CreateAssignmentModal = (props) => {
  const [file, setFile] = useState();
  const client = useClient();
  // let errorMessages;

  /**
   * Submits the assignment with the solution file that the user uploaded.
   * Send a POST request to the courses service that submits the assignments and
   * execute the file the user uploaded.
   */
  const handleSubmitClicked = async () => {
    try {
      const formData = new FormData();
      formData.append('source', file);
      const response = await client.post(
        `/api/courses/${props.assignment.course}/assignments/${props.assignment.id}/submit`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      // errorMessages =
      //   error &&
      //   error.map((err) => (
      //     <Box key={err.message} my={1}>
      //       <Alert severity="error">{err.message}</Alert>
      //     </Box>
      //   ));
    }
  };

  return (
    <div>
      <Dialog
        {...props.modalProps}
        title={`Submit assignment ${props.assignment.name}`}
        maxWidth="md"
        actions={<SuccessButton onClick={handleSubmitClicked}>Submit</SuccessButton>}
      >
        {/* {errorMessages} */}
        <DropzoneArea
          dropzoneText="Drag and drop the solution file for this assignment"
          // initialFiles={[props.assignment.configFile]}
          // acceptedFiles={[]} // A list of files to accept
          filesLimit={1}
          showAlerts={false}
          showFileNames={true}
          onChange={(files) => setFile(files.pop())}
        />
      </Dialog>
    </div>
  );
};

export default CreateAssignmentModal;
