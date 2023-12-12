import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Button from "../uikit/Button/Button";
import {useTranslation} from "react-i18next";
import {BrowserView, isMobile} from "react-device-detect";

const Header = () => {
  const {t} = useTranslation();

  return <header className={`${style.header} wrapper`}>
    <a href="#">
      <img src={logo} alt="lgu casino" className={style.logo}/>
    </a>
    {
      !isMobile
        ? (
          <div className="d-flex">
            <div className={style.registerWrapper}>
              <Button
                hasCorner
                className={style.register}
                uppercase={false}
                width={211}
                isHovered={false}
                component="div"
              >{t('header.registration')}</Button>
            </div>
            <Button color="red" width={211} isHoveredBackground={false}>{t('header.signUp')}</Button>
          </div>
        )
        : (
          <Button
            color="green"
            width={135}
            disableAnimation
          >{t('common.playNow')}</Button>
        )
    }

  </header>
}

export default Header;