import { createMuiTheme } from '@material-ui/core/styles';
import blue               from '@material-ui/core/colors/blue';

export const muiTheme = createMuiTheme({
  palette: {
     primary: blue,
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
