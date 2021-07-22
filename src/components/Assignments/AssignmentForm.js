import Grid from '@material-ui/core/Grid';
import TextField from '../UI/TextField';

/**
 * Renders a form with the fields the Assignment has
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AssignmentForm = ({ assignment, handleAssignmentFieldChanged }) => {
  return (
    <Grid container spacing={1}>
      <Grid item md={6}>
        <TextField
          label="Title"
          fullWidth
          value={assignment?.title ?? ''}
          onChange={(event) => handleAssignmentFieldChanged(event, 'title')}
        />
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
          onChange={(event) => handleAssignmentFieldChanged(event, 'dueDate')}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          label="Description"
          fullWidth
          multiline
          row={4}
          value={assignment?.description ?? ''}
          onChange={(event) => handleAssignmentFieldChanged(event, 'description')}
        />
      </Grid>
      <Grid item md={12}>
        UPLOAD CONFIGURATION FILE
      </Grid>
    </Grid>
  );
};

export default AssignmentForm;
