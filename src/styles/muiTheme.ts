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
  components: {
    MuiButton:{
      styleOverrides: {
        contained: {
          padding: "10px 20px",
          borderRadius: "16px"
        }
      }
    }
  }
});

export default theme;
