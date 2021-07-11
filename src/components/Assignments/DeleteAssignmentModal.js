import Typography from '@material-ui/core/Typography';
import Dialog from '../UI/Dialog';
import DangerButton from '../UI/Buttons/DangerButton';

const DeleteAssignmentModal = (props) => {
  const { assignment } = props;

  return (
    <Dialog
      {...props}
      title={`Delete ${assignment?.title}`}
      maxWidth="sm"
      actions={<DangerButton>Delete</DangerButton>}
    >
      <Typography variant="subtitle1">
        Are you sure you want to delete the assignment {`${assignment?.title}`}?
      </Typography>
    </Dialog>
  );
};

export default DeleteAssignmentModal;
