import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import TextField from '../UI/TextField';
import Select from '../UI/Select';

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
          error={props.errors?.hasOwnProperty('name')}
          helperText={props.errors?.hasOwnProperty('name') && props.errors.name}
          value={props.assignment?.name ?? ''}
          onChange={(event) => props.handleAssignmentFieldChanged(event, 'name')}
        />
      </Grid>
      <Grid item md={4}>
        <Select
          formControlProps={{
            fullWidth: true,
            error: props.errors?.hasOwnProperty('type'),
          }}
          helperText={props.errors?.hasOwnProperty('type') ? props.errors.type : null}
          selectProps={{
            label: 'Type',
            value: props.assignment?.type ?? '',
            onChange: (event) => props.handleAssignmentFieldChanged(event, 'type'),
          }}
          options={[
            { value: 'obligatory', text: 'Obligatory' },
            { value: 'optional', text: 'Optional' },
          ]}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          type="datetime-local"
          label="Deadline"
          fullWidth
          error={props.errors?.hasOwnProperty('deadline')}
          helperText={props.errors?.hasOwnProperty('deadline') && props.errors.deadline}
          value={props.assignment?.deadline.replace(/Z$/, '') ?? ''}
          onChange={(event) => props.handleAssignmentFieldChanged(event, 'deadline')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          label="Description"
          fullWidth
          multiline
          error={props.errors?.hasOwnProperty('description')}
          helperText={props.errors?.hasOwnProperty('description') && props.errors.description}
          row={4}
          value={props.assignment?.description ?? ''}
          onChange={(event) => props.handleAssignmentFieldChanged(event, 'description')}
        />
      </Grid>
      <Grid item md={12}>
        <DropzoneArea
          dropzoneText="Drag and drop the configuration file for this assignment"
          initialFiles={
            props.assignment?.configFile && [
              new File([], props.assignment.configFile.replace(/^configs\/[a-z0-9]+-/, '')),
            ]
          }
          filesLimit={1}
          showAlerts={false}
          showFileNames={true}
          onChange={(files) => props.handleConfigFileChanged(files)}
        />
      </Grid>
    </Grid>
  );
};

export default AssignmentForm;
