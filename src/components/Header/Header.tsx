import React from 'react';
import './Header.scss';
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
    <header className="wrapper d-flex flex-row justify-content-between align-items-center">
      <a href="#">
        <img height={39} src={logo} alt="lgu casino" />
      </a>
      <div className="d-flex flex-row gap-2">
        {map.map(v => <span className={"btn"}>{v.key}</span>)}
      </div>
      <button className={"btn btn-primary"}><span>Бесплатное занятие</span></button>
    </header>
  );
}

export default Header;
