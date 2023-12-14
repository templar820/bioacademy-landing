import React from 'react';
import { isMobile } from 'react-device-detect';
import MainPage from './pages/MainPage/MainPage';
import './styles/index.scss';

function App() {
  return (
    <div className={`app ${isMobile ? 'mobile' : ''}`}>
      <MainPage />
    </div>
  );
}

export default App;
