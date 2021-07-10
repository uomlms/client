import Button from '@material-ui/core/Button';
import Modal from '../UI/Modal';
import TextField from '../UI/TextField';

const CreateCourseModal = (props) => {
  return (
    <Modal
      {...props}
      title="Create course"
      maxWidth="md"
      actions={
        <Button variant="contained" color="primary">
          Create
        </Button>
      }
    >
      <TextField label="Name" />
    </Modal>
  );
};

export default CreateCourseModal;
