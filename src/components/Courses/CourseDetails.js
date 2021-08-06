import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import TextField from '../UI/TextField';
import SuccessButton from '../UI/Buttons/SuccessButton';
import DangerButton from '../UI/Buttons/DangerButton';
import Assignments from '../Assignments/Assignments';
import useCourseData from '../../hooks/use-course-data';
import useModal from '../../hooks/use-modal';
import DeleteCourseModal from './DeleteCourseModal';
import useRequest from '../../hooks/use-request';

/**
 * Renders the details of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CourseDetails = (props) => {
  const modal = useModal();
  const { courseData, setCourseData, handleCourseDataChanged } = useCourseData({
    ...props.selectedCourse,
  });

  const updateCourseReq = useRequest({
    url: `/api/courses/${props.selectedCourse?.id}`,
    method: 'patch',
    body: { ...courseData },
  });

  const deleteCourseReq = useRequest({
    url: `/api/courses/${props.selectedCourse?.id}`,
    method: 'delete',
  });

  // Sets the course data with the data of the selected course
  useEffect(() => {
    setCourseData({ ...props.selectedCourse });
  }, [props.selectedCourse]);

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
    props.updateCourse(updatedCourse);
  };

  /**
   * Handles the click event of the Delete button.
   * Sends a DELETE request to the courses service deleting the selected course and
   * calls the deleteCourse function from the CourseContext.
   */
  const handleDeleteClicked = async () => {
    await deleteCourseReq.sendRequest();
    props.deleteCourse(props.selectedCourse.id);
    modal.close();
  };

  const updateCourseErrors =
    updateCourseReq.errors &&
    updateCourseReq.errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  const courseDetails = (
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
      <Assignments course={props.selectedCourse} />
      <DeleteCourseModal
        open={modal.visible}
        onClose={modal.close}
        course={props.selectedCourse}
        handleDeleteClicked={handleDeleteClicked}
      />
    </React.Fragment>
  );

  return props.selectedCourse ? courseDetails : null;
};

export default CourseDetails;
