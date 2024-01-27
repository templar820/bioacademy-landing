import React from 'react';
import './index.scss';
import { Button, Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';
import Header from '../Header';

function Banner(props) {
  const data = {
    caption: isMobile ? 'Экспертный разбор по биологии' : 'присоединяйтесь к экспертному разбору ЕГЭ по биологии',
    description: 'Прокачайте свои навыки в биологии и сдайте экзамен с отличным результатом \n - наш вебинар идеальный помощник для этого!',
    get: 'Хочу пробное занятие'
  };

  return (
    <div className="banner container d-flex justify-content-center flex-column">
      {isMobile && <Header inversion mobile />}
      <Typography color="white" variant="h1">{data.caption}</Typography>
      <Typography color="white" variant="body2">{data.description}</Typography>
      <Button color="primary" size="large"><a href="#invite">{data.get}</a></Button>
    </div>
  );
}

export default Banner;
