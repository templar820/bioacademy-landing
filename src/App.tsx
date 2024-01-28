import React from 'react';
import './styles/index.scss';
import './assets/styles/media.scss';
import Index from './pages/MainPage';
import PopupsContainer from '$popup-service/components/PopupsContainer';
import Loader from '$common/Loader';

function App() {
  return (
    <>
      <Loader/>
      <PopupsContainer />
      <Index />
    </>
  );
}

export default App;
