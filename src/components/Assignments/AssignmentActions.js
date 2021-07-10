import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

const AssignmentActions = (props) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box mx={1}>
        <IconButton title="Edit">
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
        <IconButton title="Delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AssignmentActions;
