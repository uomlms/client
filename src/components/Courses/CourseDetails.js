import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';
import DangerButton from '../UI/Buttons/DangerButton';
import Assignments from '../Assignments/Assignments';
import useCourseData from '../../hooks/use-course-data';
import CoursesContext from '../../store/courses-context';

/**
 * Renders the details of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CourseDetails = ({ selectedCourse }) => {
  const coursesCtx = useContext(CoursesContext);
  const { courseData, setCourseData, handleCourseDataChanged } = useCourseData({
    ...selectedCourse,
  });

  useEffect(() => {
    setCourseData({ ...selectedCourse });
  }, [selectedCourse]);

  /**
   * Handles the click event of the Save button. Calls the updateCourse function
   * from the CourseContext
   */
  const handleSaveClicked = () => {
    coursesCtx.updateCourse(courseData);
  };

  /**
   * Handles the click event of the Delete button. Calls the deleteCourse function
   * from the CourseContext.
   */
  const handleDeleteClicked = () => {
    coursesCtx.deleteCourse(courseData.id);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <TextField
            label="Name"
            fullWidth
            value={courseData?.name ? courseData.name : ''}
            onChange={(event) => handleCourseDataChanged(event, 'name')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="Professor"
            fullWidth
            value={courseData?.professor ? courseData.professor : ''}
            onChange={(event) => handleCourseDataChanged(event, 'professor')}
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
            value={courseData?.semester ? courseData.semester : ''}
            onChange={(event) => handleCourseDataChanged(event, 'semester')}
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
            value={courseData?.description ? courseData.description : ''}
            onChange={(event) => handleCourseDataChanged(event, 'description')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" justifyContent="flex-end">
            <Box mr={1}>
              <SuccessButton onClick={handleSaveClicked}>Save</SuccessButton>
            </Box>
            <Box ml={1}>
              <DangerButton onClick={handleDeleteClicked}>Delete</DangerButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Assignments assignments={selectedCourse?.assignments} />
    </React.Fragment>
  );
};

export default CourseDetails;
