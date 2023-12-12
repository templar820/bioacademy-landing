import React from 'react';
import {useTranslation} from "react-i18next";
import styles from './TopSection.module.scss';
import Card from "../Card/Card";
import Button from "../uikit/Button/Button";
import Timer from "../Timer/Timer";
import {BrowserView, isMobile} from "react-device-detect";

const TopSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.topSection}>
      <div className={styles.blackout}/>
      <div className={styles.blackout}/>
      <div className={styles.blackout}/>
      <div className={styles.blackout}/>
      {
        !isMobile && (
          <div className={styles.woman}>
            <div className={styles.womanBack1}/>
            <div className={styles.womanBack2}/>
            <div className={styles.womanBack3}/>
            <div className={styles.womanHead}/>
            <div className={styles.womanBody}/>
            <div className={styles.womanHand}/>
            <div className={styles.womanDog}/>
          </div>
        )
      }
      <div className={`${styles.topSectionWrapper} wrapper`}>
        <Card height={!isMobile ? 463 : 333} className={`${styles.topLeftCard} ${styles.card}`}>
          <p className={styles.cardTitle}>{t('topSection.welcomeBonus')}</p>
          <p className={styles.cardText}>{t('topSection.upTo')}</p>
          <Button className={styles.cardButton} color="green" width={!isMobile ? 228 : 164}>{t('topSection.registerNow')}</Button>
        </Card>
        {
          !isMobile && (
            <Card height={463} className={`${styles.topRightCard} ${styles.card}`}>
              <p className={styles.cardTitle}>{t('topSection.easyDeposit')}</p>
              <p className={styles.cardText}>{t('topSection.successful')}</p>
              <Button className={styles.cardButton} color="green" variant="outlined" width={322}  isHoveredBackground={false}>{t('topSection.registerAndPlay')}</Button>
            </Card>
          )
        }
        <Card height={!isMobile ? 242 : 174} className={styles.bottomLeftCard}>
          <p className={styles.cardTitle2}>{t('topSection.specialBonuses')}</p>
          <Button className={styles.openVipButton} variant="empty">{t('topSection.openVip')}</Button>
        </Card>
        {
          !isMobile && (
            <Card height={242} className={styles.bottomRightCard}>
              <p className={styles.cardTitle3}>{t('topSection.tournamentStarts')}</p>
              <Timer/>
            </Card>
          )
        }
      </div>

    </section>
  )
};

export default TopSection;