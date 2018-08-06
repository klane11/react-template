import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        light: '#D9E5ED',
        main: '#254351',
        dark: '#254351',
        contrastText: '#fff',
      },
      secondary: {
        light: '#D9E5ED',
        main: '#D9E5ED',
        dark: '#5096EA',
        contrastText: '#000',
      },
    },
    typography: {
      htmlFontSize: 17,
    },
  });

export default createTheme;
