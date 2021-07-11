import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

/**
 * Renders the actions that can be executed for each assignment
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const AssignmentActions = (props) => {
  const { assignment, onEditAssignment, onDeleteAssignment } = props;

  return (
    <Box display="flex" justifyContent="flex-end">
      <Box mx={1}>
        <IconButton title="Edit" onClick={() => onEditAssignment(assignment)}>
          <EditIcon />
        </IconButton>
      </Box>
      <Box mx={1}>
        <IconButton title="Submit">
          <PublishIcon />
        </IconButton>
      </Box>
      <Box ml={1}>
        <IconButton title="History">
          <HistoryIcon />
        </IconButton>
      </Box>
      <Box ml={1}>
        <IconButton title="Delete" onClick={() => onDeleteAssignment(assignment)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AssignmentActions;
