import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Modal = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth={props.maxWidth}>
      <DialogTitle disableTypography>
        <Typography variant="h5" component="h5">
          {props.title}
        </Typography>
      </DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.onClose}>
          Close
        </Button>
        {props.actions}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
