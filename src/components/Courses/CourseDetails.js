import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '../UI/TextField';
import Assignments from '../Assignments/Assignments';

/**
 * Renders the details of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CourseDetails = ({ selectedCourse }) => {
  return (
    <React.Fragment>
      <Box>
        <TextField
          label="Description"
          value={selectedCourse?.description}
          multiline
          fullWidth
          rows={4}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Assignments assignments={selectedCourse?.assignments} />
    </React.Fragment>
  );
};

export default CourseDetails;
