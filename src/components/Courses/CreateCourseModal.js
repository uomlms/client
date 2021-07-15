import { useState, useContext } from 'react';
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
  const emptyCourseState = {
    name: '',
    professor: '',
    semester: '',
    description: '',
  };
  const [newCourse, setNewCourse] = useState(emptyCourseState);
  const coursesCtx = useContext(CoursesContext);

  /**
   * Handles the click event of the Create button. Creates a course and closes the modal.
   */
  const handleCreateCourseClicked = () => {
    coursesCtx.createCourse(newCourse);
    setNewCourse(emptyCourseState);
    props.onClose();
  };

  /**
   * Handles the change event of the input elements in the modal and updates
   * the new course state
   *
   * @param {object} event
   * @param {string} field
   */
  const handleNewCourseChanged = (event, field) => {
    const updatedNewCourse = { ...newCourse };
    updatedNewCourse[field] = event.target.value;
    setNewCourse(updatedNewCourse);
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
          <TextField
            label="Name"
            fullWidth
            value={newCourse.name}
            onChange={(event) => handleNewCourseChanged(event, 'name')}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Professor"
            fullWidth
            value={newCourse.professor}
            onChange={(event) => handleNewCourseChanged(event, 'professor')}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            type="number"
            label="Semester"
            fullWidth
            value={newCourse.semester}
            onChange={(event) => handleNewCourseChanged(event, 'semester')}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            label="Description"
            fullWidth
            multiline
            row={4}
            value={newCourse.description}
            onChange={(event) => handleNewCourseChanged(event, 'description')}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateCourseModal;
