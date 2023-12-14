import React from 'react';
import './index.scss';
import { Button, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';

function Header() {
  const map = [
    {
      key: 'Занятия',
      url: '#'
    },
    {
      key: 'План вебинара',
      url: '#'
    },
    {
      key: 'О преподавателе',
      url: '#'
    },
    {
      key: 'Образование',
      url: '#'
    },
  ];

  return (
    <header className="container d-flex flex-row justify-content-between align-items-center">
      <a href="#">
        <img height={39} src={logo} alt="lgu casino" />
      </a>
      <div className="d-flex flex-row gap-5">
        {map.map(v => <Typography className={"cursor-pointer"} variant="button">{v.key}</Typography>)}
      </div>
      <Button variant="contained" color="primary">
        Бесплатное занятие
      </Button>
    </header>
  );
}

export default Header;
