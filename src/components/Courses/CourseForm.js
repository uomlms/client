import Grid from '@material-ui/core/Grid';
import TextField from '../UI/TextField';

/**
 * Renders a form with the fields the Course has
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const CourseForm = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item md={4}>
        <TextField
          label="Name"
          fullWidth
          error={props.errors?.hasOwnProperty('name')}
          helperText={props.errors?.hasOwnProperty('name') && props.errors.name}
          value={props.course?.name ? props.course.name : ''}
          onChange={(event) => props.handleCourseDataChanged(event, 'name')}
          InputProps={{
            readOnly: !props.isStaff,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          label="Professor"
          fullWidth
          error={props.errors?.hasOwnProperty('professor')}
          helperText={props.errors?.hasOwnProperty('professor') && props.errors.professor}
          value={props.course?.professor ? props.course.professor : ''}
          onChange={(event) => props.handleCourseDataChanged(event, 'professor')}
          InputProps={{
            readOnly: !props.isStaff,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          type="number"
          label="Semester"
          fullWidth
          error={props.errors?.hasOwnProperty('semester')}
          helperText={props.errors?.hasOwnProperty('semester') && props.errors.semester}
          value={props.course?.semester ? props.course.semester : ''}
          onChange={(event) => props.handleCourseDataChanged(event, 'semester')}
          InputProps={{
            readOnly: !props.isStaff,
          }}
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
          row={4}
          error={props.errors?.hasOwnProperty('description')}
          helperText={props.errors?.hasOwnProperty('description') && props.errors.description}
          value={props.course?.description ? props.course.description : ''}
          onChange={(event) => props.handleCourseDataChanged(event, 'description')}
          InputProps={{
            readOnly: !props.isStaff,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CourseForm;
