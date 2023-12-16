import { createTheme } from '@mui/material';
import Colors from './colors.module.scss';
import typography from './typography';
import palette from './palette';
import UTILS from "../utils";

const getColors = (props) => {
  return CSS.supports('color', props?.color) ? props?.color : Colors[props?.color] || {};
};

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
          backgroundColor: "white",
          borderRadius: "10px",
          border: "1px solid #000",
          fontSize: 18
        }
      }
    },
    MuiTextField:{
      styleOverrides: {
        root: {
          '.MuiInputBase-root': {
            borderRadius: UTILS.getInPx(16) + '!important',
          },
          fieldset: {
            border: '1px solid ' + Colors.white + '!important',
            borderRadius: UTILS.getInPx(16),
            background: `${Colors.white} !important`,
            paddingLeft: '16px !important',
          },
          input: {
            zIndex: 10,
            color: `${Colors.secondary} !important`,
          },
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            padding: '16px 30px',
          },
        }
      ],
      styleOverrides: {
        root: {
          "&:hover":{
            backgroundColor: Colors.blue1,
            color: "white"
          }
        },
        contained: {
          padding: '10px 20px',
          borderRadius: '16px'
        }
      }
    }
  }
});

export default theme;
