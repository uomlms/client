import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const AssignmentActions = (props) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box mx={1}>
        <Button variant="contained">Edit</Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained">Submit</Button>
      </Box>
      <Box ml={1}>
        <Button variant="contained">History</Button>
      </Box>
    </Box>
  );
};

export default AssignmentActions;
