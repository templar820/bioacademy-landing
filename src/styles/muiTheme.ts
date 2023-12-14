import { createTheme } from '@mui/material';
import Colors from './colors.module.scss';
import typography from './typography';
import palette from './palette';

const getColors = (props) => {
  return CSS.supports('color', props?.color) ? props?.color : Colors[props?.color] || {};
};

const theme = createTheme({
  palette,
  typography,
});

export default theme;
