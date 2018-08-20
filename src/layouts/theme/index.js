import { createMuiTheme } from '@material-ui/core/styles';
import indigo             from '@material-ui/core/colors/indigo';

export const muiTheme = createMuiTheme({
  palette: {
    primary: indigo,
  },
  themeName: 'Main Theme',
});

export default {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
