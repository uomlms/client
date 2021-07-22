import Grid from '@material-ui/core/Grid';
import TextField from '../UI/TextField';

/**
 * Renders a form with the fields the Assignment has
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AssignmentForm = ({ assignment }) => {
  return (
    <Grid container spacing={1}>
      <Grid item md={6}>
        <TextField label="Title" fullWidth value={assignment?.title ?? ''} />
      </Grid>
      <Grid item md={6}>
        <TextField
          type="date"
          label="Due date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={assignment?.dueDate ?? ''}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          label="Description"
          fullWidth
          multiline
          row={4}
          value={assignment?.description ?? ''}
        />
      </Grid>
      <Grid item md={12}>
        UPLOAD CONFIGURATION FILE
      </Grid>
    </Grid>
  );
};

export default AssignmentForm;
