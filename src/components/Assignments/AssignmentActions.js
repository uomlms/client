import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';
import EditAssignmentModal from './EditAssignmentModal';
import SubmitAssignmentModal from './SubmitAssignmentModal';
import AssignmentHistoryModal from './AssignmentHistoryModal';
import DeleteAssignmentModal from './DeleteAssignmentModal';
import useModal from '../../hooks/use-modal';

/**
 * Renders the actions that can be executed for each assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentActions = (props) => {
  const editModal = useModal();
  const submitModal = useModal();
  const historyModal = useModal();
  const deleteModal = useModal();

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="flex-end">
        {props.isStaff && (
          <Box mx={1}>
            <IconButton title="Edit" onClick={editModal.open}>
              <EditIcon />
            </IconButton>
          </Box>
        )}
        <Box mx={1}>
          <IconButton title="Submit" onClick={submitModal.open}>
            <PublishIcon />
          </IconButton>
        </Box>
        <Box ml={1}>
          <IconButton title="History" onClick={historyModal.open}>
            <HistoryIcon />
          </IconButton>
        </Box>
        {props.isStaff && (
          <Box ml={1}>
            <IconButton title="Delete" onClick={deleteModal.open}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {props.isStaff && (
        <React.Fragment>
          <EditAssignmentModal
            modalProps={{
              open: editModal.visible,
              onClose: editModal.close,
            }}
            assignment={props.assignment}
            updateAssignment={props.updateAssignment}
            uploadConfigFile={props.uploadConfigFile}
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
      )}

      <SubmitAssignmentModal
        modalProps={{
          open: submitModal.visible,
          onClose: submitModal.close,
        }}
        assignment={props.assignment}
      />
      <AssignmentHistoryModal
        modalProps={{
          open: historyModal.visible,
          onClose: historyModal.close,
        }}
        assignment={props.assignment}
      />
    </React.Fragment>
  );
};

export default AssignmentActions;
