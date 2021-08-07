import { TextField as MuiTextField } from '@material-ui/core';

/**
 * Renders custom a Material UI TextField, setting the following default props:
 *  - variant=outlined
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const TextField = (props) => {
  return <MuiTextField variant="outlined" {...props} />;
};

export default TextField;
