import { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Dialog from '../UI/Dialog';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';
import CoursesContext from '../../store/courses-context';
import useCourseData from '../../hooks/use-course-data';

/**
 * Renders the Create course modal from which the use can create a new course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CreateCourseModal = (props) => {
  const { courseData, handleCourseDataChanged, clearCourseData } = useCourseData();
  const coursesCtx = useContext(CoursesContext);

  /**
   * Handles the click event of the Create button. Creates a course and closes the modal.
   */
  const handleCreateCourseClicked = () => {
    coursesCtx.createCourse(courseData);
    clearCourseData();
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
