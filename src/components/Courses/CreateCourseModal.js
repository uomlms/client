import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Dialog from '../UI/Dialog';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';
import useCourseData from '../../hooks/use-course-data';
import useRequest from '../../hooks/use-request';

/**
 * Renders the Create course modal from which the use can create a new course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CreateCourseModal = (props) => {
  const { courseData, handleCourseDataChanged, clearCourseData } = useCourseData();
  const { sendRequest, errors } = useRequest({
    url: '/api/courses',
    method: 'post',
    body: { ...courseData },
  });

  /**
   * Handles the click event of the Create button. Creates a course and closes the modal.
   */
  const handleCreateCourseClicked = async () => {
    const newCourse = await sendRequest();
    if (!newCourse) {
      return;
    }

    props.createCourse(newCourse);
    clearCourseData();
    props.onClose();
  };

  const errorMessages =
    errors &&
    errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <Dialog
      {...props}
      title="Create course"
      maxWidth="md"
      actions={<SuccessButton onClick={handleCreateCourseClicked}>Create</SuccessButton>}
    >
      <Grid container spacing={1}>
        {errorMessages && (
          <Grid item md={12}>
            {errorMessages}
          </Grid>
        )}
        <Grid item md={4}>
          <TextField
            label="Name"
            fullWidth
            value={courseData.name}
            onChange={(event) => handleCourseDataChanged(event, 'name')}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Professor"
            fullWidth
            value={courseData.professor}
            onChange={(event) => handleCourseDataChanged(event, 'professor')}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            type="number"
            label="Semester"
            fullWidth
            value={courseData.semester}
            onChange={(event) => handleCourseDataChanged(event, 'semester')}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            label="Description"
            fullWidth
            multiline
            row={4}
            value={courseData.description}
            onChange={(event) => handleCourseDataChanged(event, 'description')}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateCourseModal;
