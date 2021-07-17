import { useState, useEffect, useContext } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../UI/Buttons/Button';
import TextField from '../UI/TextField';
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';
import CreateCourseModal from './CreateCourseModal';
import useModal from '../../hooks/use-modal';
import CoursesContext from '../../store/courses-context';

/**
 * The Courses page displayed in the /courses route
 *
 * @returns {JSX.Element}
 */
const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState();
  const coursesCtx = useContext(CoursesContext);
  const modal = useModal();

  useEffect(() => {
    // Sets the default selected course to be the first one when the component is rendered
    if (coursesCtx.courses.length >= 0) {
      setSelectedCourse(coursesCtx.courses[0]);
    }
  }, [coursesCtx.courses]);

  /**
   * Sets the new selected course in the component's state
   *
   * @param {object} newSelectedCourse
   */
  const handleSelectCourse = (newSelectedCourse) => {
    setSelectedCourse(newSelectedCourse);
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
          <CoursesList selectedCourse={selectedCourse} handleSelectCourse={handleSelectCourse} />
        </Grid>
        <Grid item md={9}>
          <CourseDetails selectedCourse={selectedCourse} />
        </Grid>
      </Grid>
      <CreateCourseModal open={modal.visible} onClose={modal.close} />
    </Box>
  );
};

export default Courses;
