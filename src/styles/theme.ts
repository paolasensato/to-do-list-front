import { createTheme } from '@mui/material';
import palette from './theme.json';

const theme = createTheme({
  ...palette,
});

export default theme;