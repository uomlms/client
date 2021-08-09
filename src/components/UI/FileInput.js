import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

/**
 * Renders custom a Material UI File input component
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const FileInput = (props) => {
  const [fileName, setFileName] = useState(props?.value);

  /**
   * Handles the change event of the file input
   *
   * @param {Object} event
   */
  const handleChange = (event) => {
    setFileName(event.target?.files?.[0]?.name);
    props.onChange?.(event);
  };

  return (
    <Box display="flex">
      <label htmlFor="file-input">
        <input
          style={{ display: 'none' }}
          id="file-input"
          name="file-input"
          type="file"
          onChange={handleChange}
        />

        <Fab {...props.styleProps} component="span" aria-label="add" variant="extended">
          <AddIcon /> Upload file
        </Fab>
      </label>
      <Box p={1}>{fileName}</Box>
    </Box>
  );
};

export default FileInput;
