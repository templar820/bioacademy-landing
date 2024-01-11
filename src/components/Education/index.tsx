import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Colors from '$colors';
import future from '$images/future.png';
import mentor from '$images/mentor.png';
import teacher_year from '$images/teacher_year.png';
import './index.scss';
import { isMobile } from 'react-device-detect';
import MySwiper from '$common/Swiper/Swiper';

function Education(props) {
  const [active, setActive] = useState(1);

  const data = [
    {
      caption: 'Учитель будущего',
      description: 'При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.',
      url: future,
    },
    {
      caption: 'Диплом наставника',
      description: 'В рамках исследовательской программы “Всероссийский отлас почвенных микроорганизмов”.',
      url: mentor,
      width: 300,
    },
    {
      caption: 'Учитель года',
      description: 'При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.',
      url: teacher_year,
      width: 194,
    },
  ];

  const getCard = (caption, description, url, width) => {
    return (
      <div className="card-contained d-flex flex-column gap-3">
        <Typography variant="subtitle1" color={Colors.blue1}>{caption}</Typography>
        <Typography variant="body2">{description}</Typography>
        <img className="align-self-center" width={width || 194} src={url} />
      </div>
    );
  };

  return (
    <div id="education" className="container d-flex flex-column gap-4 Education">
      <Typography className={"Education__caption"} variant="h2" color="black">Образование</Typography>
      {isMobile ? (
        <MySwiper
          activeIndex={active}
          onSlide={(index) => {
            setActive(index);
          }}
          list={data}
        >
          {(v) => {
            return getCard(v.caption, v.description, v.url, v.width);
          }}
        </MySwiper>
      ) : (
        <div className="d-flex flex-row gap-4 justify-content-center mt-5">
          {data.map((v, item) => {
            return getCard(v.caption, v.description, v.url, v.width);
          })}
        </div>
      )}

    </div>
  );
}

export default Education;
