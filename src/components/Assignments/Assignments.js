import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../UI/Buttons/Button';
import AssignmentTable from './AssignmentTable';

const Assignments = ({ assignments }) => {
  return (
    <Box mt={2}>
      <Box my={1} display="flex">
        <Box flexGrow={1}>
          <Typography variant="h5" component="h5">
            Assignmnents
          </Typography>
        </Box>
        <Button color="primary">Create assignment</Button>
      </Box>
      <AssignmentTable assignments={assignments} />
    </Box>
  );
};

export default Assignments;
