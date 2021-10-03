import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';
import Dialog from '../UI/Dialog';
import useRequest from '../../hooks/use-request';

/**
 * Renders the Assignment history modal from which shows to the user every submission
 * they done for the current assignment
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const AssignmentHistoryModal = (props) => {
  const [submissions, setSubmissions] = useState();

  /**
   * Handles the execution and the errors of the GET request to the courses services
   * that returns all the submissions of the current assignment.
   *
   * @type {Object}
   */
  const { sendRequest, errors } = useRequest({
    url: `/api/courses/${props.assignment.course}/assignments/${props.assignment.id}/submit`,
    method: 'get',
  });

  // Sets the submission for the current assignment when the modal opens
  useEffect(() => {
    if (!props.modalProps.open) {
      return;
    }
    sendRequest().then((response) => {
      if (!response) {
        return;
      }
      setSubmissions([...response]);
    });
  }, [props.modalProps.open]);

  const errorMessages =
    errors &&
    errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <div>
      <Dialog
        {...props.modalProps}
        title={`History of assignment ${props.assignment.name}`}
        maxWidth="md"
      >
        {errorMessages}
        {submissions ? (
          <Box>
            <Typography>
              Number of submissions: <strong>{submissions.length}</strong>
            </Typography>
            <Divider />

            {submissions.map((submission) => {
              const createdAtDate = submission.createdAt.match(/\d{4}-\d{2}-\d{2}/).pop();
              const createdAtTime = submission.createdAt.match(/\d{2}:\d{2}:\d{2}/).pop();

              let borderColor = 'error.main';
              if (submission.status === 'pending') {
                borderColor = 'warning.main';
              } else if (
                submission.status === 'success' ||
                submission.status === 'partially-success'
              ) {
                borderColor = 'success.main';
              }

              return (
                <Box key={submission.id} m={1} pl={1} borderLeft={5} borderColor={borderColor}>
                  <Typography>
                    Submitted at: {createdAtDate} {createdAtTime}
                  </Typography>
                  <Typography>Status: {submission.status}</Typography>
                </Box>
              );
            })}
          </Box>
        ) : (
          <Alert severity="info">No submissions found</Alert>
        )}
      </Dialog>
    </div>
  );
};

export default React.memo(AssignmentHistoryModal);
