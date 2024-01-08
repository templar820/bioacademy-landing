import React from 'react';
import {Typography} from "@mui/material";
import Colors from '$colors';
import "./index.scss"
import {isMobile} from "react-device-detect";

function WebinarPlan(props) {
  
  
  const data = [
    {
      caption: "Структура экзамена",
      description: "При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.",
      time: "15 минут"
    },
    {
      caption: "Структура экзамена",
      description: "При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.",
      time: "15 минут"
    },
    {
      caption: "Структура экзамена",
      description: "При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.",
      time: "15 минут"
    },
  ]
  
  
  
  return (
    <div id={"webinar_plans"} className={"container d-flex flex-column gap-4 WebinarPlan flex-wrap"}>
      <Typography variant={'h2'} color={"black"} align={isMobile ? "center" :"inherit"} >План вебинара</Typography>
      <div className="d-flex flex-row gap-4 flex-wrap">
        {data.map((v,item) => {
          return (
            <div className={"card-outlined d-flex flex-column gap-3 position-relative"}>
              <Typography variant={"h3"} color={Colors.blue1}>{v.caption}</Typography>
              <Typography variant={"body1"}>{v.description}</Typography>
              <Typography variant={"body1"} color={Colors.blue1}>{v.time}</Typography>
              <Typography variant={"h2"} className={"count"}>0{item+1}</Typography>
            </div>
          )
        })}
      </div>

    
    </div>
  );
}

export default WebinarPlan;