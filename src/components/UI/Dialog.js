import { Dialog as MuiDialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from './Buttons/Button';

/**
 * Renders a custom Material UI Dialog settings some default props and
 * providing the ability to use it in different components by passing props
 * like the title or the actions based on the use case.
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const Dialog = (props) => {
  return (
    <MuiDialog open={props.open} onClose={props.onClose} fullWidth maxWidth={props.maxWidth}>
      <DialogTitle disableTypography>
        <Typography variant="h5" component="h5">
          {props.title}
        </Typography>
      </DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Close</Button>
        {props.actions}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
