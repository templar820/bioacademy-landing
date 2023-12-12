import React, {useRef, useState} from 'react';
import styles from './HotGamesSection.module.scss';
import Card from "../Card/Card";
import {useTranslation} from "react-i18next";
import Button from "../uikit/Button/Button";
import colors from '../../styles/colors.module.scss'

import card1Image from '../../assets/images/hotGames/card1.png'
import card2Image from '../../assets/images/hotGames/card2.png'
import card3Image from '../../assets/images/hotGames/card3.png'
import card4Image from '../../assets/images/hotGames/card4.png'
import UseAnimationElement from "../../hooks/UseAnimationElement";
import {isMobile} from "react-device-detect";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import ReactSlider from 'react-slider';

interface HotGameCardProps {
  img: any;
  text: string;
  borderColor: string;
  zIndex: number;
  size: {width: number; height: number;};
  rotation: number;
  position: {top: number; left: number;};
}

const HotGameCard: React.FC<HotGameCardProps> = (props) => {
  const {img, borderColor, zIndex, size, rotation, position, text} = props;
  const {t} = useTranslation();

  return (
    <div
      className={styles.hotGameCard}
      style={{
        backgroundImage: `url(${img})`,
        zIndex,
        borderColor,
        width: `${size.width}px`,
        height: `${size.height}px`,
        transform: `rotate(${rotation}deg)`,
        top: position.top,
        left: position.left,
      }}
    >
      <div className={styles.hotGameCardBackground}>
        <div className={styles.hotGameCardContent}>
          <div className={styles.hotGameCardText}>{text}</div>
          <Button width={192} color="red">{t('common.playNow')}</Button>
        </div>
      </div>
    </div>
  )
}

const HotGamesSection = () => {
  const { t } = useTranslation();
  const [swiperProgress, setSwiperProgress] = useState(0);
  const swiperRef = useRef();

  UseAnimationElement();

  return (
    <section className={`${styles.hotGamesSection} ${!isMobile ? 'element-animation' : ''}`}>
      {
        isMobile && (
          <div className={styles.swiperWrapper}>
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={20}
              onProgress={((swiper, progress) => setSwiperProgress(progress))}
              className={styles.swiper}
            >
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide1}`}/>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide2}`}/>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide3}`}/>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.swiperSlide} ${styles.swiperSlide4}`}/>
              </SwiperSlide>
            </Swiper>
          </div>
        )
      }
      <div className={`wrapper ${isMobile ? '' : "d-flex position-relative"}`}>
        <Card height={!isMobile ? 570 : 410} color="red" className="position-relative">
          <div className={styles.hotGameIcon}/>
          <p className={styles.hotGameTitle}>{t('hotGamesSection.title')}</p>
          <div className={styles.hotGameButtonWrapper}>
            <Button color="red" width={!isMobile ? 192 : 238}>{t('common.playNow')}</Button>
          </div>
          {
            isMobile && (
              <>
                <div className={styles.iconArrows}/>
                <div className={styles.iconHand}/>
              </>
            )
          }
        </Card>
        {
          isMobile && (
            <ReactSlider
              max={100}
              onChange={(value) => swiperRef.current.swiper.setProgress(value / 100)}
              onAfterChange={() => swiperRef.current.swiper.slideTo(Math.ceil(swiperProgress * 4) - 1)}
              value={swiperProgress * 100}
            />
          )
        }
        {
          !isMobile && (
            <div className={styles.hotGamesCards}>
              <div className={styles.hotGameWrapper}>
                <div className={styles.hotGamesRow}>
                  <HotGameCard
                    img={card1Image}
                    borderColor={colors.blue1}
                    zIndex={5}
                    size={{width: 378, height: 225}}
                    rotation={-4}
                    position={{top: 120, left: -50}}
                    text={t('hotGamesSection.card1Text')}
                  />
                  <HotGameCard
                    img={card2Image}
                    borderColor={colors.red4}
                    zIndex={3}
                    size={{width: 315, height: 235}}
                    rotation={-3.48}
                    position={{top: 70, left: -60}}
                    text={t('hotGamesSection.card2Text')}
                  />
                </div>
                <div className={styles.cardsTitleWrapper}>
                  <div className={styles.cardsTitle}>{t('hotGamesSection.chooseGame')}</div>
                </div>
                <div className={styles.hotGamesRow} style={{height: 0}}>
                  <HotGameCard
                    img={card3Image}
                    borderColor={colors.blue2}
                    zIndex={4}
                    size={{width: 457, height: 263}}
                    rotation={-2.76}
                    position={{top: -170, left: 30}}
                    text={t('hotGamesSection.card3Text')}
                  />
                  <HotGameCard
                    img={card4Image}
                    borderColor={colors.gray5}
                    zIndex={2}
                    size={{width: 274, height: 229}}
                    rotation={-3.2}
                    position={{top: -195, left: 20}}
                    text={t('hotGamesSection.card4Text')}
                  />
                </div>
              </div>
            </div>
          )
        }

      </div>
    </section>
  );
};

export default HotGamesSection;