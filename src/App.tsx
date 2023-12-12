import React from 'react';
import { isMobile } from 'react-device-detect';
import MainPage from './pages/MainPage/MainPage';
import './styles/common.scss';
import './styles/reset.scss';

function App() {
  return (
    <div className={`app ${isMobile ? 'mobile' : ''}`}>
      <MainPage />
    </div>
  );
}

export default App;
