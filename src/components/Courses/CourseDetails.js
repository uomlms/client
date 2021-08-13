import React from 'react';
import Box from '@material-ui/core/Box';
import SuccessButton from '../UI/Buttons/SuccessButton';
import DangerButton from '../UI/Buttons/DangerButton';
import CourseForm from './CourseForm';
import Assignments from '../Assignments/Assignments';
import useCourseData from '../../hooks/use-course-data';
import useModal from '../../hooks/use-modal';
import DeleteCourseModal from './DeleteCourseModal';
import useRequest from '../../hooks/use-request';

/**
 * Renders the details of the selected course
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const CourseDetails = (props) => {
  const modal = useModal();
  const { courseData, setCourseData, handleCourseDataChanged } = useCourseData(
    props.selectedCourse
  );

  // Sets the course data with the data of the selected course if it's not the same course
  if (props.selectedCourse?.id !== courseData?.id) {
    setCourseData(props.selectedCourse);
  }

  /**
   * Handles the execution and the error of the PATCH request to the courses service
   * that updates the selected course
   *
   * @type {Object}
   */
  const updateCourseReq = useRequest({
    url: `/api/courses/${props.selectedCourse?.id}`,
    method: 'patch',
    body: { ...courseData },
  });

  /**
   * Handles the execution and the errors of the DELETE request to the courses services
   * that deletes the selected course
   *
   * @type {Object}
   */
  const deleteCourseReq = useRequest({
    url: `/api/courses/${props.selectedCourse?.id}`,
    method: 'delete',
  });

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

  const updateCourseErrors = updateCourseReq.errors?.reduce((obj, error) => {
    obj[error.field] = error.message;
    return obj;
  }, {});

  const courseDetails = (
    <React.Fragment>
      <CourseForm
        isStaff={props.isStaff}
        course={courseData}
        errors={updateCourseErrors}
        handleCourseDataChanged={handleCourseDataChanged}
      />
      {props.isStaff && (
        <Box pt={1} display="flex" justifyContent="flex-end">
          <Box mr={1}>
            <SuccessButton onClick={handleSaveClicked}>Save</SuccessButton>
          </Box>
          <Box ml={1}>
            <DangerButton onClick={() => modal.open()}>Delete</DangerButton>
          </Box>
        </Box>
      )}

      <Assignments course={props.selectedCourse} isStaff={props.isStaff} />
      {props.isStaff && (
        <DeleteCourseModal
          modalProps={{
            open: modal.visible,
            onClose: modal.close,
          }}
          course={props.selectedCourse}
          handleDeleteClicked={handleDeleteClicked}
        />
      )}
    </React.Fragment>
  );

  return props.selectedCourse ? courseDetails : null;
};

export default CourseDetails;
