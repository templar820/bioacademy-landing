import React from 'react';
import {Typography} from "@mui/material";
import Colors from '$colors';
import future from '$images/future.png';
import mentor from '$images/mentor.png';
import teacher_year from '$images/teacher_year.png';
import "./index.scss"

function Education(props) {
  
  const data = [
    {
      caption: "Учитель будущего",
      description: "При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.",
      url: future,
    },
    {
      caption: "Диплом наставника",
      description: "В рамках исследовательской программы “Всероссийский отлас почвенных микроорганизмов”.",
      url: mentor,
      width: 300,
    },
    {
      caption: "Учитель года",
      description: "При оценке дизайна и композиции читаемый текст мешает сосредоточиться. Стандартное заполнение шаблона.",
      url: teacher_year,
      width: 194,
    },
  ]
  
  const getCard = (caption, description, url, width) => {
    return (
      <div className="card-contained d-flex flex-column gap-3">
        <Typography variant="subtitle1" color={Colors.blue1}>{caption}</Typography>
        <Typography variant="body2">{description}</Typography>
        <img className={"align-self-center"} width={width || 194} src={url}/>
      </div>
    );
  };
  
  
  
  return (
    <div className={"container d-flex flex-column gap-4 Education"}>
      <Typography variant={'h2'} color={"black"}>Образование</Typography>
      <div className="d-flex flex-row gap-4 justify-content-center mt-5">
        {data.map((v,item) => {
          return getCard(v.caption, v.description, v.url, v.width)
        })}
      </div>

    
    </div>
  );
}

export default Education;