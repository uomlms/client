import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';
import AssignmentActions from './AssignmentActions';

/**
 * Creates the styles that can be used by the AssignmentTable component
 *
 * @returns {Object}
 */
const useStyles = makeStyles((theme) => ({
  theadLight: {
    backgroundColor: theme.palette.grey[300],
  },
}));

/**
 * Renders the table where the assignments of the selected course are displayed
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentTable = (props) => {
  const classes = useStyles();

  let assignmentsRows = (
    <TableRow>
      <TableCell>No assignments for the selected course</TableCell>
    </TableRow>
  );
  if (props.assignments?.length > 0) {
    assignmentsRows = props.assignments.map((assignment, index) => (
      <TableRow key={index}>
        <TableCell>{assignment.name}</TableCell>
        <TableCell>{assignment.type}</TableCell>
        <TableCell>{assignment.description}</TableCell>
        <TableCell>{assignment.deadline.match(/\d{4}-\d{2}-\d{2}/).pop()}</TableCell>
        <TableCell align="right" style={{ width: '20%' }}>
          <AssignmentActions
            assignment={assignment}
            updateAssignment={props.updateAssignment}
            deleteAssignment={props.deleteAssignment}
          >
            {assignment.actions}
          </AssignmentActions>
        </TableCell>
      </TableRow>
    ));
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.theadLight}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{assignmentsRows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentTable;
