import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    primary: {
      main: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6f61',
    },
    text: {
      primary: '#212121',
      secondary: '#5f6368',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: ['"Inter"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 600 },
    h2: { fontWeight: 500 },
    body1: { fontSize: '1rem' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
  },
});

export default theme;

