import React from 'react';
import './index.scss';
import { Button, Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';
import logo from '$assets/images/logo.png';
import logoInv from '$assets/images/logo-inversion.png';
import logoMobile from '$assets/images/logo-mobile.png';

interface IHeader {
  inversion?: boolean
  mobile?: boolean;
}

function Header(props: IHeader) {
  const map = [
    {
      key: 'Занятия',
      url: '#lessons'
    },
    {
      key: 'План вебинара',
      url: '#webinar_plans'
    },
    {
      key: 'О преподавателе',
      url: '#about_me'
    },
    {
      key: 'Образование',
      url: '#education'
    },
  ];

  return (
    <div className="Header">
      <div className={`${props.mobile ? 'mobile' : props.inversion ? 'inversion' : ''}`}>
        <header className="d-flex flex-row justify-content-between align-items-center container ">
          <a href="#">
            <img height={39} src={props.mobile ? logoMobile : props.inversion ? logoInv : logo} alt="lgu casino" />
          </a>
          {!isMobile && (
            <>
              <div className="d-flex flex-row gap-5">
                {map.map(v => (
                  <Typography
                    key={v.url}
                    className="cursor-pointer"
                    color={props.inversion ? 'white' : 'black'}
                    variant="button"
                  >
                    <a href={v.url}>{v.key}</a>
                  </Typography>
                ))}
              </div>
              <Button
                onClick={() => {
                  ym(96385120,'reachGoal','click_trial_lesson')
                }}
                variant="contained" color={props.inversion ? 'secondary' : 'primary'}>
                <a href="#invite">Бесплатное занятие</a>
              </Button>
            </>
          )}
        </header>
      </div>
    </div>

  );
}

export default Header;
