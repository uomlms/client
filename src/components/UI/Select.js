import { Select as MuiSelect } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * Renders custom a Material UI Select, setting the following default props:
 *  - variant=outlined
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const Select = ({ formControlProps, selectProps, options, ...props }) => {
  return (
    <FormControl variant="outlined" {...formControlProps}>
      <InputLabel id="select-outlined-label">{selectProps.label}</InputLabel>
      <MuiSelect labelId="select-outlined-label" {...selectProps}>
        <MenuItem value="">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </MuiSelect>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
