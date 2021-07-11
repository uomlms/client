import Grid from '@material-ui/core/Grid';
import Dialog from '../UI/Dialog';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';

const CreateCourseModal = (props) => {
  return (
    <Dialog
      {...props}
      title="Create course"
      maxWidth="md"
      actions={<SuccessButton>Create</SuccessButton>}
    >
      <Grid container spacing={1}>
        <Grid item md={4}>
          <TextField label="Name" fullWidth />
        </Grid>
        <Grid item md={4}>
          <TextField label="Professor" fullWidth />
        </Grid>
        <Grid item md={4}>
          <TextField label="Year" fullWidth />
        </Grid>
        <Grid item md={12}>
          <TextField label="Description" fullWidth multiline row={4} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateCourseModal;
