import React from 'react';
import './index.scss';
import { Button, Typography } from '@mui/material';

function Banner(props) {
  const data = {
    caption: 'присоединяйтесь к экспертному разбору ЕГЭ по биологии',
    description: 'Прокачайте свои навыки в биологии и сдайте экзамен с отличным результатом \n - наш вебинар идеальный помощник для этого!',
    get: 'Хочу пробное занятие'
  };

  return (
    <div className="container mt-5">
      <div className="banner d-flex justify-content-center flex-column gap-4 align-items-start">
        <Typography color="white" variant="h1">{data.caption}</Typography>
        <Typography color="white" variant="body2">{data.description}</Typography>
        <Button color="primary" size={"large"}>{data.get}</Button>
      </div>
    </div>

  );
}

export default Banner;
