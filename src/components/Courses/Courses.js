import { useState, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../UI/Buttons/Button';
import TextField from '../UI/TextField';
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';
import CreateCourseModal from './CreateCourseModal';
import useModal from '../../hooks/use-modal';

/**
 * The Courses page displayed in the /courses route
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const Courses = (props) => {
  const [courses, setCourses] = useState(props.courses);
  const [selectedCourse, setSelectedCourse] = useState(courses.length > 0 ? courses[0] : null);
  const modal = useModal();

  /**
   * Sets the new selected course in the component's state
   *
   * @param {Object} newSelectedCourse
   */
  const handleSelectCourse = useCallback(
    (newSelectedCourse) => setSelectedCourse(newSelectedCourse),
    [selectedCourse]
  );

  /**
   * Adds the new given course to the courses state
   *
   * @param {Object} newCourse
   */
  const createCourse = (newCourse) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      updatedCourses.push({ ...newCourse });

      if (prevCourses.length === 0) {
        setSelectedCourse(updatedCourses[0]);
      }

      return updatedCourses;
    });
  };

  /**
   * Update the given course in the courses state
   *
   * @param {Object} updatedCourse
   */
  const updateCourse = (updatedCourse) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      const existingCourseIndex = updatedCourses.findIndex(
        (course) => course.id === updatedCourse.id
      );
      updatedCourses[existingCourseIndex] = { ...updatedCourse };

      return updatedCourses;
    });
  };

  /**
   * Deletes the course with the given id from the courses state
   *
   * @param {Object} courseId
   */
  const deleteCourse = (courseId) => {
    setCourses((prevCourses) => {
      let updatedCourses = [...prevCourses];
      updatedCourses = updatedCourses.filter((course) => course.id !== courseId);

      setSelectedCourse(updatedCourses.length > 0 ? updatedCourses[0] : null);

      return updatedCourses;
    });
  };

  return (
    <Box width="inherit">
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Box display="flex" alignItems="center">
            <SearchIcon />
            <TextField label="Search" type="search" fullWidth />
          </Box>
        </Grid>
        <Grid item md={9}>
          {props.isStaff && (
            <Box height={1} display="flex" alignItems="center" justifyContent="flex-end">
              <Button color="primary" onClick={modal.open}>
                Create course
              </Button>
            </Box>
          )}
        </Grid>
        <Grid item md={3}>
          <CoursesList
            courses={courses}
            selectedCourse={selectedCourse}
            handleSelectCourse={handleSelectCourse}
          />
        </Grid>
        <Grid item md={9}>
          <CourseDetails
            selectedCourse={selectedCourse}
            updateCourse={updateCourse}
            deleteCourse={deleteCourse}
            isStaff={props.isStaff}
          />
        </Grid>
      </Grid>
      {props.isStaff && (
        <CreateCourseModal
          modalProps={{ open: modal.visible, onClose: modal.close }}
          isStaff={props.isStaff}
          createCourse={createCourse}
        />
      )}
    </Box>
  );
};

export default Courses;
