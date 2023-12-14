import { ThemeOptions } from '@mui/material';
// import { isMobile } from 'react-device-detect';

const getInPx = (number: number) => `${number}px`;

const typography: ThemeOptions['typography'] = {
  fontFamily: ['SF Pro Display'],
  allVariants: {
    fontStyle: 'normal',
    fontWeight: 500,
    textTransform: 'none',
    whiteSpace: 'pre-line',
    lineHeight: 'normal'
  },
  // Прям название сайта
  h1: {
    fontWeight: 700,
    fontSize: getInPx(48),
    lineHeight: getInPx(64),
    textTransform: 'uppercase'
  },
  h2: {
    fontWeight: 700,
    fontSize: getInPx( 40),
  },
  // h3: {
  //   fontWeight: 700,
  //   fontSize: getInPx(isMobile ? 20 : 45),
  //   lineHeight: getInPx(isMobile ? 20 : 45),
  // },
  // h4: {
  //   fontWeight: 700,
  //   fontSize: getInPx(30),
  //   lineHeight: getInPx(30),
  // },
  subtitle2: {
    fontSize: getInPx(20),
  },
  // Текст в карточках
  body1: {
    fontSize: getInPx(18),
    fontWeight: 300,
  },
  body2: {
    fontWeight: 400,
    fontSize: getInPx(14),
  },
  button: {
    fontSize: getInPx(15),
    lineHeight: getInPx(16),
  },
  // // лейблы к инпутам
  // caption: {
  //   fontWeight: 300,
  //   fontSize: getInPx(16),
  //   lineHeight: getInPx(18),
  // },
  // // Всякие Badge ну тип уведомления
  // h5: {
  //   fontWeight: 'bold',
  //   fontSize: getInPx(12),
  //   lineHeight: getInPx(14),
  // },
  // // Тултипчики
  // h6: {
  //   fontWeight: 400,
  //   fontSize: getInPx(12),
  //   lineHeight: getInPx(14),
  // },
};

export default typography;
