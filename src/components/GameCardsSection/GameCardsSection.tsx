import React from 'react';
import styles from './GameCardsSection.module.scss';
import GameCard from "../GameCard/GameCard";
import {useTranslation} from "react-i18next";
import card1Image from '../../assets/images/gameCards/JourneytotheWealth_Monkey.png';
import card1Background from '../../assets/images/gameCards/card1-background.png';
import card2Image from '../../assets/images/gameCards/jackpot.png';
import card2Background from '../../assets/images/gameCards/card2-background.png';
import card3Image from '../../assets/images/gameCards/NinjavsSamurai_Samurai.png';
import card3Background from '../../assets/images/gameCards/card3-background.png';
import {isMobile} from "react-device-detect";
import Timer from "../Timer/Timer";
import Card from "../Card/Card";

const GameCardsSection = () => {
  const {t} = useTranslation();

  return <section className={`${styles.gameCardSection} wrapper ${!isMobile ? 'element-animation' : ''}`}>
    <GameCard
      label={t("gameCardsSection.liveCasino")}
      title={t("gameCardsSection.roulette")}
      learnMoreText={t("gameCardsSection.card1LearnMore")}
      image={card1Image}
      background={card1Background}
    />
    <GameCard
      label={t("gameCardsSection.casino")}
      title={t("gameCardsSection.slots")}
      learnMoreText={t("gameCardsSection.card2LearnMore")}
      image={card2Image}
      background={card2Background}
      gradientMode
    />
    {
      isMobile && (
        <Card height={174} className={styles.timer}>
          <p className={styles.timerTitle}>{t('topSection.tournamentStarts')}</p>
          <Timer/>
        </Card>
      )
    }
    <GameCard
      label={t("gameCardsSection.tournaments")}
      title={t("gameCardsSection.newTournaments")}
      learnMoreText={t("gameCardsSection.card3LearnMore")}
      image={card3Image}
      background={card3Background}
    />
  </section>
};

export default GameCardsSection;