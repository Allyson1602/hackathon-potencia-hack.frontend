import { createTheme } from '@mui/material/styles';
import './assets/css/fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
        light: "#8133f1",
        main: "#6200EE",
        dark: "#4400a6"
    },
    secondary: {
        light: "#7d7ff2",
        main: "#5d5fef",
        dark: "#4142a7"
    },
  },
});

export default theme;