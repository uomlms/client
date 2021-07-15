import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Dialog from '../UI/Dialog';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';
import CoursesContext from '../../store/courses-context';

/**
 * Renders the Create course modal from which the use can create a new course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CreateCourseModal = (props) => {
  const coursesCtx = useContext(CoursesContext);

  const handleCreateCourseClicked = () => {
    coursesCtx.createCourse();
    props.onClose();
  };

  return (
    <Dialog
      {...props}
      title="Create course"
      maxWidth="md"
      actions={<SuccessButton onClick={handleCreateCourseClicked}>Create</SuccessButton>}
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
