import { createTheme } from '@mui/material';
import Colors from './colors.module.scss';
import typography from './typography';
import palette from './palette';
import UTILS from '../utils';

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          border: '1px solid #000',
          fontSize: 18
        }
      }
    },
    MuiFormControlLabel:{
      styleOverrides: {
        asterisk: {
          display: "none"
        },
        root: {
          ".MuiStack-root":{
            display: "flex !important",
            flexDirection: "row !important",
            color: "white",
            gap: "8px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiInputBase-root': {
            borderRadius: UTILS.getInPx(16) + '!important',
          },
          fieldset: {
            borderRadius: UTILS.getInPx(16),
            background: 'white !important',
            paddingLeft: '16px !important',
            borderWidth: "0 !important",
            '&:hover': {
              borderColor: "transparent"
            }
          },
          input: {
            zIndex: 10,
            color: 'black !important',
            '&::placeholder': {
              color: 'black',
              opacity: 1, /* Firefox */
            }
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
          '&:hover': {
            backgroundColor: Colors.blue1,
            color: 'white'
          }
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: "white !important",
            color: 'black'
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
