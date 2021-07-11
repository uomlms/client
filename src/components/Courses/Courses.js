import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Page from '../UI/Page';
import Button from '../UI/Buttons/Button';
import TextField from '../UI/TextField';
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';
import CreateCourseModal from './CreateCourseModal';
import useModal from '../../hooks/use-modal';

import COURSES from './DummyCourses';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState();
  const modal = useModal();
  const courses = COURSES;

  useEffect(() => {
    if (courses.length >= 0) {
      setSelectedCourse(courses[0]);
    }
  }, []);

  const handleSelectCourse = (newselectedCourse) => {
    setSelectedCourse(newselectedCourse);
  };

  return (
    <Page>
      <Box p={1} flexGrow={1}>
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
              selectedCourse={selectedCourse}
              courses={courses}
              handleSelectCourse={handleSelectCourse}
            />
          </Grid>
          <Grid item md={9}>
            <CourseDetails selectedCourse={selectedCourse} />
          </Grid>
        </Grid>
      </Box>
      <CreateCourseModal open={modal.visible} onClose={modal.close} />
    </Page>
  );
};

export default Courses;
