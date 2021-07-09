import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AssignmentTable from './AssignmentTable';

const ASSIGNMENTS = [
  {
    name: 'assignment 1',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
  {
    name: 'assignment 2',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
  {
    name: 'assignment 3',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
  {
    name: 'assignment 4',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
  {
    name: 'assignment 5',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
  {
    name: 'assignment 6',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
  {
    name: 'assignment 7',
    description: 'description of assignment',
    dueDate: 'duedate of assignment',
    actions: 'actions of asssignmen',
  },
];

const Assignments = () => {
  return (
    <Box mt={2}>
      <Typography variant="h5" component="h5">
        Assignmnents
      </Typography>
      <AssignmentTable assignments={ASSIGNMENTS} />
    </Box>
  );
};

export default Assignments;
