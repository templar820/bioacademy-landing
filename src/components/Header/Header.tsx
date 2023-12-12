import React from 'react';
import { BrowserView, isMobile } from 'react-device-detect';
import './Header.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const map = [
    {
      key: 'Занятия и стоимость',
      url: '#'
    },
    {
      key: 'Методика и обучение',
      url: '#'
    },
    {
      key: 'Отзывы',
      url: '#'
    },
    {
      key: 'Обо мне',
      url: '#'
    },
    {
      key: 'FAQ',
      url: '#'
    },
  ];

  return (
    <header className="wrapper d-flex flex-row justify-content-between align-items-center">
      <a href="#">
        <img height={39} src={logo} alt="lgu casino" />
      </a>
      {map.map(v => <span className={"btn"}>{v.key}</span>)}
      <button className={"btn btn-primary"}><span>Бесплатное занятие</span></button>
    </header>
  );
}

export default Header;
