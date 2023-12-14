import React from 'react';
import { Typography } from '@mui/material';
import "./index.scss"
import arrow from "$images/arrow.png"

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
      <div className={"card-contained"}>
        <Typography>{caption}</Typography>
        <Typography>{description}</Typography>
      </div>
    );
  };

  return (
    <div className="NewSkills d-flex flex-row w-100 container">
      <div className="w-50">
        <Typography>После вебинара</Typography>
        <img width={268} src={arrow}></img>
      </div>
      <div className="grid">
        {data.map(v => getCard(v.caption, v.description))}
      </div>
    </div>
  );
}

export default NewSkills;
