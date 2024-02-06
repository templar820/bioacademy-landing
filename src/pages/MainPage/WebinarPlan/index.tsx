import React from 'react';
import {Typography} from "@mui/material";
import Colors from '$colors';
import "./index.scss"

function WebinarPlan(props) {
  
  const data = [
    {
      caption: "Структура экзамена",
      description: "Узнай, какие задания дают максимум баллов за минимум времени",
      time: "15 минут"
    },
    {
      caption: "Разбор заданий",
      description: "Получи уникальную формулу решений и как избежать типовые ошибки",
      time: "25 минут"
    },
    {
      caption: "Мышление проверяющего",
      description: "Расскажем о том, как думают эксперты и как получить большее баллов в неочевидных местах",
      time: "15 минут"
    },
  ]
  
  
  
  return (
    <div id={"webinar_plans"} className={"container d-flex flex-column gap-4 WebinarPlan"}>
      <Typography className={"WebinarPlan__caption"} variant={'h2'} color={"black"}>План вебинара</Typography>
      <div className="WebinarPlan__grid d-flex flex-row gap-4">
        {data.map((v,item) => {
          return (
            <div key={v.caption} className={"card-outlined d-flex flex-column gap-3 position-relative"}>
              <Typography variant={"h3"} color={Colors.blue1}>{v.caption}</Typography>
              <Typography variant={"body1"}>{v.description}</Typography>
              <Typography className={"time"} variant={"body1"} color={Colors.blue1}>{v.time}</Typography>
              <Typography variant={"h2"} className={"count"}>0{item+1}</Typography>
            </div>
          )
        })}
      </div>

    
    </div>
  );
}

export default WebinarPlan;
