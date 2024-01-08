import React from 'react';
import { Typography } from '@mui/material';
import './index.scss';
import arrow from '$images/arrow.png';
import Colors from '$colors';
import {isMobile} from "react-device-detect";

function NewSkills(props) {
  const data = [
    {
      caption: 'Понимать, что именно хотят проверяющие',
      description: 'Приобщитесь к мышлению проверяющих ЕГЭ, узнайте, что они ожидают от ваших ответов.',
    },
    {
      caption: 'Управлять временем на экзамене',
      description: 'Получите проверенный рецепт контроля времени при решении задач, чтобы уверенно завершить каждый блок экзамена',
    },
    {
      caption: 'Преодолевать сложнейшие задачи',
      description: 'Уникальная возможность разобрать труднейшие вопросы ЕГЭ вместе с опытным преподавателем и набрать максимум баллов.',
    },
    {
      caption: 'Сюрприз в конце вебинара',
      description: 'Успей забрать свой сюрприз в конце нашего вебинара!',
    },
  ];

  const getCard = (caption, description) => {
    return (
      <div className="card-contained d-flex flex-column gap-2">
        <Typography variant="subtitle2">{caption}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
    );
  };

  return (
    <div id={"lessons"} className="NewSkills d-flex flex-row w-100 container gap-4 flex-wrap">
      <div className="w-50 d-flex flex-column justify-content-center gap-4">
        <Typography variant="h2" color={Colors.blue1}>После вебинара</Typography>
        {isMobile && <Typography variant="h3">Вы научитесь</Typography>}
        {!isMobile && <img className="align-self-end" width={268} src={arrow}/>}
      </div>
      <div className="grid">
        {data.map(v => getCard(v.caption, v.description))}
      </div>
    </div>
  );
}

export default NewSkills;
