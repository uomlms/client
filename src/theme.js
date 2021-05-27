import { createMuiTheme } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

const theme = createMuiTheme({
  zIndex: {
    appBar: zIndex.drawer + 1,
  },
});

export default theme;
