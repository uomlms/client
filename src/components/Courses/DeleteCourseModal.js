import Typography from '@material-ui/core/Typography';
import Dialog from '../UI/Dialog';
import DangerButton from '../UI/Buttons/DangerButton';

/**
 * Renders the Delete course modal. A modal that asks the users if they are sure
 * they want to delete the current course.
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const DeleteCourseModal = ({ course, handleDeleteClicked, modalProps }) => {
  return (
    <Dialog
      {...modalProps}
      title={`Delete ${course?.name}`}
      maxWidth="sm"
      actions={<DangerButton onClick={handleDeleteClicked}>Delete</DangerButton>}
    >
      <Typography variant="subtitle1">
        Are you sure you want to delete the course {`${course?.name}`}?
      </Typography>
    </Dialog>
  );
};

export default DeleteCourseModal;
