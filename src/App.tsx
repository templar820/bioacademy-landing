import React from 'react';
import { isMobile } from 'react-device-detect';
import Index from './pages/MainPage';
import './styles/index.scss';

function App() {
  return (
    <div className={`app ${isMobile ? 'mobile' : ''}`}>
      <Index />
    </div>
  );
}

export default App;
