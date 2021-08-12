import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import TextField from '../UI/TextField';
import Select from '../UI/Select';
import useRequest from '../../hooks/use-request';

/**
 * Renders a form with the fields the Assignment has
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentForm = (props) => {
  const { sendRequest } = useRequest({
    url: props.assignment?.configFile,
    method: 'get',
  });

  useEffect(() => {
    const getConfigFileFromUrl = async () => {
      try {
        const response = await sendRequest();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getConfigFileFromUrl();
  }, []);

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
            { value: 'obligatory', text: 'Obligatory' },
            { value: 'optional', text: 'Optional' },
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
        <DropzoneArea
          dropzoneText="Drag and drop the configuration file for this assignment"
          initialFiles={[]}
          // acceptedFiles={[]} // A list of files to accept
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
