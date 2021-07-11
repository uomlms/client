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
 * @returns {object}
 */
const useStyles = makeStyles((theme) => ({
  theadLight: {
    backgroundColor: theme.palette.grey[300],
  },
}));

/**
 * Renders the table where the assignments of the selected course are displayed
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AssignmentTable = ({ assignments }) => {
  const classes = useStyles();

  let assignmentsRows = (
    <TableRow>
      <TableCell>No assignments for the selected course</TableCell>
    </TableRow>
  );
  if (assignments) {
    assignmentsRows = assignments.map((assignment, index) => (
      <TableRow key={index}>
        <TableCell>{assignment.name}</TableCell>
        <TableCell>{assignment.description}</TableCell>
        <TableCell>{assignment.dueDate}</TableCell>
        <TableCell align="right">
          <AssignmentActions>{assignment.actions}</AssignmentActions>
        </TableCell>
      </TableRow>
    ));
  }

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
        <TableBody>{assignmentsRows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignmentTable;
