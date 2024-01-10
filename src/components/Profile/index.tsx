import React from 'react';
import "./index.scss"
import {Button, Chip, Typography} from "@mui/material";
import profile from "$images/profile.png"
import Colors from '$colors';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
function Profile(props) {
  const data = [
    "Высшее образование - РГПУ им. Герцена Санкт-Петербург",
    "Учитель биологии  высшей категории МБОУ г. Пушкино «СОШ №11»",
    "Призер конкурса «Учитель Подмосковья – 2019»",
    "Член ассоциации педагогов «Учителя биологии, химии и экологии»",
    "Тренер проекта «Школа профессионального мастерства»",
    "Эксперт  аттестационной комиссии педагогов",
    "Опыт оценивания ЕГЭ",
    "Учебно-методические публикации",
  ]
  
  return (
    <div id={"about_me"} className={"Profile py-5"}>
      <div className="container d-flex flex-row flex-wrap">
        <div className="d-flex flex-column gap-2 flex-1">
          <Typography className={"Profile__caption"} variant={"h2"}>Я - Колмыкова Инна</Typography>
          <Typography className={"Profile__caption"} variant={"subtitle2"} color={Colors.blue1}>{"Несколько факто в обо мне, которые помогут \n нам “заочно” познакомиться поближе"}</Typography>
          <div className="mt-5 d-flex flex-row gap-4 flex-wrap Profile__card">
            <img width={173} src={profile}></img>
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <Button className={"w-100"} endIcon={<TelegramIcon/> }>Написать в телеграм</Button>
              <Button className={"w-100"} endIcon={<MailIcon/> }>Написать на почту</Button>
            </div>
          </div>
        </div>
        <div className="d-flex ChipLine h-100 flex-1 flex-wrap">
          {data.map(v => {
            return (
              <Chip label={v}/>
            )
          })}
        
        </div>
      </div>
    </div>
  );
}

export default Profile;