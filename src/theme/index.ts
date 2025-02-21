// src/theme/index.js
import { createTheme } from "@mui/material/styles";



const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#000',
    },
    secondary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default darkTheme;
