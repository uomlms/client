import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '../UI/TextField';
import AssignmentList from '../Assignments/AssignmentList';

const CourseDetails = () => {
  return (
    <React.Fragment>
      <Box>
        <TextField
          label="Description"
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
        <AssignmentList />
      </Box>
    </React.Fragment>
  );
};

export default CourseDetails;
