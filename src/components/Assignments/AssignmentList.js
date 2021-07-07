import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ASSIGNMENTS = [
  { name: 'assignment 1' },
  { name: 'assignment 2' },
  { name: 'assignment 3' },
  { name: 'assignment 4' },
  { name: 'assignment 5' },
  { name: 'assignment 6' },
  { name: 'assignment 7' },
  // { name: 'assignment 1' },
  // { name: 'assignment 2' },
  // { name: 'assignment 3' },
  // { name: 'assignment 4' },
  // { name: 'assignment 5' },
  // { name: 'assignment 6' },
  // { name: 'assignment 7' },
];

const AssignmentList = () => {
  const assignmentsList = ASSIGNMENTS.map((assignment, index) => (
    <ListItem key={index}>
      <ListItemText>{assignment.name}</ListItemText>
    </ListItem>
  ));

  return (
    <Box>
      <List>{assignmentsList}</List>
    </Box>
  );
};

export default AssignmentList;
