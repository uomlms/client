import Grid from '@material-ui/core/Grid';
import TextField from '../UI/TextField';
import Select from '../UI/Select';
import FileInput from '../UI/FileInput';

/**
 * Renders a form with the fields the Assignment has
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentForm = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item md={4}>
        <TextField
          label="Name"
          fullWidth
          value={props.assignment?.name ?? ''}
          onChange={(event) => props.handleAssignmentFieldChanged(event, 'name')}
        />
      </Grid>
      <Grid item md={4}>
        <Select
          formControlProps={{
            fullWidth: true,
          }}
          selectProps={{
            label: 'Type',
            value: props.assignment?.type ?? '',
            onChange: (event) => props.handleAssignmentFieldChanged(event, 'type'),
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
          value={props.assignment?.deadline.match(/\d{4}-\d{2}-\d{2}/)?.pop() ?? ''}
          onChange={(event) => props.handleAssignmentFieldChanged(event, 'deadline')}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          label="Description"
          fullWidth
          multiline
          row={4}
          value={props.assignment?.description ?? ''}
          onChange={(event) => props.handleAssignmentFieldChanged(event, 'description')}
        />
      </Grid>
      <Grid item md={12}>
        <FileInput
          styleProps={{
            color: 'secondary',
            variant: 'extended',
            size: 'medium',
          }}
          onChange={props.handleConfigFileChanged}
        />
      </Grid>
    </Grid>
  );
};

export default AssignmentForm;
