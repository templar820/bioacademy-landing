import React, {useState} from 'react';
import styles from './CountrySelect.module.scss';
import Select from "../uikit/Select/Select";

import australiaFlag from '../../assets/icons/australiaFlag.png';
import englishFlag from '../../assets/icons/englishFlag.png';
import germanFlag from '../../assets/icons/germanFlag.png';
import {useTranslation} from "react-i18next";

const CountrySelect = () => {
  const {i18n} = useTranslation();
  const [value, setValue] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setValue(i18n.language)
  }

  return <div className={styles.countrySelect}>
    <Select
      options={[
        {text: 'English', value: 'en', icon: englishFlag},
        {text: 'Australia', value: 'en-au', icon: australiaFlag},
        {text: 'German', value: 'de', icon: germanFlag},
      ]}
      value={value}
      onChange={changeLanguage}
      className={styles.select}
    />
  </div>
};

export default CountrySelect