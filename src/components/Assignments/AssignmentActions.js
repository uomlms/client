import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';
import EditAssignmentModal from './EditAssignmentModal';
import DeleteAssignmentModal from './DeleteAssignmentModal';
import useModal from '../../hooks/use-modal';

/**
 * Renders the actions that can be executed for each assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentActions = (props) => {
  const editAssignmentModal = useModal();
  const deleteModal = useModal();

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="flex-end">
        <Box mx={1}>
          <IconButton title="Edit" onClick={editAssignmentModal.open}>
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
          <IconButton title="Delete" onClick={deleteModal.open}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <EditAssignmentModal
        modalProps={{
          open: editAssignmentModal.visible,
          onClose: editAssignmentModal.close,
        }}
        assignment={props.assignment}
        updateAssignment={props.updateAssignment}
      />
      <DeleteAssignmentModal
        modalProps={{
          open: deleteModal.visible,
          onClose: deleteModal.close,
        }}
        assignment={props.assignment}
        deleteAssignment={props.deleteAssignment}
      />
    </React.Fragment>
  );
};

export default AssignmentActions;
