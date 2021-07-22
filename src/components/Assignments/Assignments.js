import { useEffect, useContext } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../UI/Buttons/Button';
import AssignmentTable from './AssignmentTable';
import CreateAssignmentModal from './CreateAssignmentModal';
import useModal from '../../hooks/use-modal';
import AssignmentsContext from '../../store/assignments-context';
import ASSIGNMENTS from './DummyAssignments';

/**
 * Renders the information and actions for the assignments of the selected course
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Assignments = ({ course }) => {
  const modal = useModal();
  const assignmentsCtx = useContext(AssignmentsContext);

  useEffect(() => {
    const assignments = ASSIGNMENTS.filter((assignment) => assignment.course_id === course?.id);
    assignmentsCtx.set(assignments);
  }, [course]);

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
      <AssignmentTable />
      <CreateAssignmentModal open={modal.visible} onClose={modal.close} />
    </Box>
  );
};

export default Assignments;
