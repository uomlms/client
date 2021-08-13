import CourseForm from './CourseForm';
import Dialog from '../UI/Dialog';
import SuccessButton from '../UI/Buttons/SuccessButton';
import useCourseData from '../../hooks/use-course-data';
import useRequest from '../../hooks/use-request';

/**
 * Renders the Create course modal from which the use can create a new course
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const CreateCourseModal = (props) => {
  const { courseData, handleCourseDataChanged, clearCourseData } = useCourseData();

  /**
   * Handles the execution and the errors of the POST request to the courses
   * service that creates a course.
   *
   * @type {Object}
   */
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
    props.modalProps.onClose();
  };

  const errorMessages = errors?.reduce((obj, error) => {
    obj[error.field] = error.message;
    return obj;
  }, {});

  return (
    <Dialog
      {...props.modalProps}
      title="Create course"
      maxWidth="md"
      actions={<SuccessButton onClick={handleCreateCourseClicked}>Create</SuccessButton>}
    >
      <CourseForm
        isStaff={props.isStaff}
        course={courseData}
        errors={errorMessages}
        handleCourseDataChanged={handleCourseDataChanged}
      />
    </Dialog>
  );
};

export default CreateCourseModal;
