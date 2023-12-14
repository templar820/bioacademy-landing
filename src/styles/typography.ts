import { ThemeOptions } from '@mui/material';
import { isMobile } from 'react-device-detect';

const getInPx = (number: number) => `${number}px`;

const typography: ThemeOptions['typography'] = {
  fontFamily: ['SF Pro Display'],
  allVariants: {
    fontStyle: 'normal',
    fontWeight: 500,
    textTransform: 'none',
  },
  // Прям название сайта
  h1: {
    fontWeight: 700,
    // fontSize: getInPx(isMobile ? 36 : 80),
    // lineHeight: getInPx(isMobile ? 36 : 80),
  },
  h2: {
    fontWeight: 700,
    fontSize: getInPx(isMobile ? 36 : 60),
    lineHeight: getInPx(isMobile ? 36 : 55),
  },
  h3: {
    fontWeight: 700,
    fontSize: getInPx(isMobile ? 20 : 45),
    lineHeight: getInPx(isMobile ? 20 : 45),
  },
  h4: {
    fontWeight: 700,
    fontSize: getInPx(30),
    lineHeight: getInPx(30),
  },
  // Текст в карточках
  body1: {
    fontSize: getInPx(isMobile ? 16 : 20),
    lineHeight: getInPx(22),
  },
  body2: {
    fontWeight: 400,
    fontSize: getInPx(isMobile ? 16 : 15),
    lineHeight: getInPx(20),
  },
  button: {
    fontSize: getInPx(15),
    lineHeight: getInPx(16),
  },
  // лейблы к инпутам
  caption: {
    fontWeight: 300,
    fontSize: getInPx(16),
    lineHeight: getInPx(18),
  },
  // Всякие Badge ну тип уведомления
  h5: {
    fontWeight: 'bold',
    fontSize: getInPx(12),
    lineHeight: getInPx(14),
  },
  // Тултипчики
  h6: {
    fontWeight: 400,
    fontSize: getInPx(12),
    lineHeight: getInPx(14),
  },
};

export default typography;
