import { createTheme } from '@mui/material';
import palette from './theme.json';

const theme = createTheme({
  ...palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;