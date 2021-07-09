import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  theadLight: {
    backgroundColor: theme.palette.grey[300],
  },
}));

const AssignmentTable = (props) => {
  const classes = useStyles();

  const assignments = props.assignments.map((assignment, index) => (
    <TableRow>
      <TableCell>{assignment.name}</TableCell>
      <TableCell>{assignment.description}</TableCell>
      <TableCell>{assignment.dueDate}</TableCell>
      <TableCell align="right">{assignment.actions}</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.theadLight}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{assignments}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentTable;
