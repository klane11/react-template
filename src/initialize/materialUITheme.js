import { createMuiTheme } from 'material-ui/styles';

const fontWeightMedium = 500;

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
      fontFamily:
        'Avenir',
      fontWeightMedium,
      display1: {
        fontWeight: fontWeightMedium,
      },
      htmlFontSize: 17,
    },
  });

export default createTheme;
