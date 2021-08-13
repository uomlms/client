import { useState } from 'react';
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
const CreateAssignmentModal = (props) => {
  const { assignmentData, clearAssignmentData, handleAssignmentFieldChanged } = useAssignmentData();
  const [configFile, setConfigFile] = useState();

  /**
   * Handles the execution and the errors of the POST request to the courses services
   * that creates an assignment.
   *
   * @type {Object}
   */
  const { sendRequest, errors } = useRequest({
    url: `/api/courses/${props.course?.id}/assignments`,
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

    props.createAssignment(newAssignment);

    if (configFile) {
      props.uploadConfigFile(newAssignment, configFile);
      setConfigFile(null);
    }

    clearAssignmentData();
    props.modalProps.onClose();
  };

  const errorMessages = errors?.reduce((obj, error) => {
    obj[error.field] = error.message;
    return obj;
  }, {});

  return (
    <div>
      <Dialog
        {...props.modalProps}
        title="Create assignment"
        maxWidth="md"
        actions={<SuccessButton onClick={handleCreateClicked}>Create</SuccessButton>}
      >
        <AssignmentForm
          assignment={assignmentData}
          errors={errorMessages}
          handleAssignmentFieldChanged={handleAssignmentFieldChanged}
          handleConfigFileChanged={(files) => setConfigFile(files.pop())}
        />
      </Dialog>
    </div>
  );
};

export default CreateAssignmentModal;
