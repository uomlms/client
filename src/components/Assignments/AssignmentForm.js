import Grid from '@material-ui/core/Grid';
import TextField from '../UI/TextField';
import Select from '../UI/Select';

/**
 * Renders a form with the fields the Assignment has
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentForm = ({ assignment, handleAssignmentFieldChanged }) => {
  return (
    <Grid container spacing={1}>
      <Grid item md={4}>
        <TextField
          label="Name"
          fullWidth
          value={assignment?.name ?? ''}
          onChange={(event) => handleAssignmentFieldChanged(event, 'name')}
        />
      </Grid>
      <Grid item md={4}>
        <Select
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            label: 'Type',
            value: assignment?.type ?? '',
            onChange: (event) => handleAssignmentFieldChanged(event, 'type'),
          }}
          options={[
            { value: 'obligatory', text: 'obligatory' },
            { value: 'optional', text: 'optional' },
          ]}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          type="date"
          label="Deadline"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={assignment?.deadline.match(/\d{4}-\d{2}-\d{2}/)?.pop() ?? ''}
          onChange={(event) => handleAssignmentFieldChanged(event, 'deadline')}
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
