import Grid from '@material-ui/core/Grid';
import Dialog from '../UI/Dialog';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';

const CreateAssignmentModal = (props) => {
  return (
    <Dialog
      {...props}
      title="Create assignment"
      maxWidth="md"
      actions={<SuccessButton>Create</SuccessButton>}
    >
      <Grid container spacing={1}>
        <Grid item md={6}>
          <TextField label="Title" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField
            type="date"
            label="Due date"
            fullWidth
            defaultValue={new Date().toISOString().slice(0, 10)}
          />
        </Grid>
        <Grid item md={12}>
          <TextField label="Description" fullWidth multiline row={4} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateAssignmentModal;
