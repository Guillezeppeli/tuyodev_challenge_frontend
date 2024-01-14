// theme.js

import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    // Add custom colors and update these as needed
  },
  typography: {
    fontFamily: [
      'Roboto', // Ensure Roboto is loaded in your index.html or is imported via CSS
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      'OpenSans'
    ].join(','),
    // You can customize the typography as well
  },
  // You can add more customizations here such as overrides, mixins, etc.
});

export default theme;
