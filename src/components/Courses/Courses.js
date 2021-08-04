import { useState, useEffect } from 'react';
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
 * @param {object} props
 * @returns {JSX.Element}
 */
const Courses = (props) => {
  const [courses, setCourses] = useState([...props.courses]);
  const [selectedCourse, setSelectedCourse] = useState();
  const modal = useModal();

  useEffect(() => {
    // Sets the default selected course to be the first one when the component is rendered
    if (courses.length >= 0) {
      setSelectedCourse(courses[0]);
    }
  }, [courses]);

  /**
   * Sets the new selected course in the component's state
   *
   * @param {object} newSelectedCourse
   */
  const handleSelectCourse = (newSelectedCourse) => {
    setSelectedCourse(newSelectedCourse);
  };

  /**
   * Adds the new given course to the courses state
   *
   * @param {object} newCourse
   */
  const createCourse = (newCourse) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      updatedCourses.push({ ...newCourse });
      return updatedCourses;
    });
  };

  /**
   * Update the given course in the courses state
   *
   * @param {object} updatedCourse
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
   * @param {object} courseId
   */
  const deleteCourse = (courseId) => {
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses];
      updatedCourses = updatedCourses.filter((course) => course.id !== courseId);
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
          <Box height={1} display="flex" alignItems="center" justifyContent="flex-end">
            <Button color="primary" onClick={modal.open}>
              Create course
            </Button>
          </Box>
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
          />
        </Grid>
      </Grid>
      <CreateCourseModal open={modal.visible} onClose={modal.close} createCourse={createCourse} />
    </Box>
  );
};

export default Courses;
