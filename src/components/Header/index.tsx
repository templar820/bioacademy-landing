import React from 'react';
import './index.scss';
import { Button, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import logoInv from '../../assets/images/logo-inversion.png';

interface IHeader {
  inversion?: boolean
}

function Header(props: IHeader) {
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
    <div className={`${props.inversion ? 'inversion' : ''}`}>
      <header className="d-flex flex-row justify-content-between align-items-center container ">
        <a href="#">
          <img height={39} src={props.inversion ? logoInv : logo} alt="lgu casino" />
        </a>
        <div className="d-flex flex-row gap-5">
          {map.map(v => <Typography className="cursor-pointer" color={props.inversion ? "white": "black"} variant="button">{v.key}</Typography>)}
        </div>
        <Button variant="contained" color={props.inversion ? "secondary": "primary"}>
          Бесплатное занятие
        </Button>
      </header>
    </div>

  );
}

export default Header;
