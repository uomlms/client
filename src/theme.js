import { createMuiTheme } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

/**
 * The custom material ui theme for the application
 *
 * @const {object} theme
 */
const theme = createMuiTheme({
  zIndex: {
    appBar: zIndex.drawer + 1,
  },
  drawer: {
    mdWidth: '240px',
    smWidth: '0px',
  },
  appBar: {
    height: '64px',
  },
});

export default theme;
