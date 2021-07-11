import Grid from '@material-ui/core/Grid';
import Dialog from '../UI/Dialog';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';

/**
 * Creates the Assignment modal from which the user can create an assignment
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AssignmentModal = (props) => {
  const { assignment } = props;

  let modalTitle = 'Create assignment';
  let buttonText = 'Create';
  if (assignment) {
    modalTitle = `Edit ${assignment.title}`;
    buttonText = 'Save';
  }

  return (
    <Dialog
      {...props}
      title={modalTitle}
      maxWidth="md"
      actions={<SuccessButton>{buttonText}</SuccessButton>}
    >
      <Grid container spacing={1}>
        <Grid item md={6}>
          <TextField label="Title" fullWidth value={assignment?.title} />
        </Grid>
        <Grid item md={6}>
          <TextField
            type="date"
            label="Due date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={assignment?.dueDate}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            label="Description"
            fullWidth
            multiline
            row={4}
            value={assignment?.description}
          />
        </Grid>
        <Grid item md={12}>
          UPLOAD CONFIGURATION FILE
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default AssignmentModal;
