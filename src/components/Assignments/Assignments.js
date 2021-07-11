import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../UI/Buttons/Button';
import AssignmentTable from './AssignmentTable';
import CreateAssignmentModal from './CreateAssignmentModal';
import useModal from '../../hooks/use-modal';

const Assignments = ({ assignments }) => {
  const modal = useModal();

  return (
    <Box mt={2}>
      <Box my={1} display="flex">
        <Box flexGrow={1}>
          <Typography variant="h5" component="h5">
            Assignmnents
          </Typography>
        </Box>
        <Button color="primary" onClick={modal.open}>
          Create assignment
        </Button>
      </Box>
      <AssignmentTable assignments={assignments} />
      <CreateAssignmentModal open={modal.visible} onClose={modal.close} />
    </Box>
  );
};

export default Assignments;
