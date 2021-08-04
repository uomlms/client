import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';
import DangerButton from '../UI/Buttons/DangerButton';
import Assignments from '../Assignments/Assignments';
import useCourseData from '../../hooks/use-course-data';
import useModal from '../../hooks/use-modal';
import CoursesContext from '../../context/courses-context';
import DeleteCourseModal from './DeleteCourseModal';
import AssignmentsProvider from '../../context/AssignmentsProvider';
import useRequest from '../../hooks/use-request';

/**
 * Renders the details of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CourseDetails = ({ selectedCourse }) => {
  const coursesCtx = useContext(CoursesContext);
  const modal = useModal();

  const { courseData, setCourseData, handleCourseDataChanged } = useCourseData({
    ...selectedCourse,
  });

  const deleteCourseReq = useRequest({
    url: `/api/courses/${selectedCourse?.id}`,
    method: 'delete',
  });

  const updateCourseReq = useRequest({
    url: `/api/courses/${selectedCourse?.id}`,
    method: 'patch',
    body: { ...courseData },
  });

  // Sets the course data with the data of the selected course
  useEffect(() => {
    setCourseData({ ...selectedCourse });
  }, [selectedCourse]);

  /**
   * Handles the click event of the Save button.
   * Sends a PATCH request to the courses service updating the selected course and
   * calls the updateCourse function from the CourseContext
   */
  const handleSaveClicked = async () => {
    const updatedCourse = await updateCourseReq.sendRequest();
    if (!updatedCourse) {
      return;
    }
    coursesCtx.updateCourse(updatedCourse);
  };

  /**
   * Handles the click event of the Delete button.
   * Sends a DELETE request to the courses service deleting the selected course and
   * calls the deleteCourse function from the CourseContext.
   */
  const handleDeleteClicked = async () => {
    await deleteCourseReq.sendRequest();
    coursesCtx.deleteCourse(selectedCourse.id);
    modal.close();
  };

  const updateCourseErrors =
    updateCourseReq.errors &&
    updateCourseReq.errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {updateCourseErrors && (
          <Grid item md={12}>
            {updateCourseErrors}
          </Grid>
        )}

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
              <DangerButton onClick={() => modal.open()}>Delete</DangerButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <AssignmentsProvider>
        <Assignments course={selectedCourse} />
      </AssignmentsProvider>
      <DeleteCourseModal
        open={modal.visible}
        onClose={modal.close}
        course={selectedCourse}
        handleDeleteClicked={handleDeleteClicked}
      />
    </React.Fragment>
  );
};

export default CourseDetails;
