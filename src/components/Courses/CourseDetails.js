import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '../UI/TextField';
import Assignments from '../Assignments/Assignments';

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
          maxRows={4}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box>
        <Assignments />
      </Box>
    </React.Fragment>
  );
};

export default CourseDetails;
