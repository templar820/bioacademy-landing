import React from 'react';
import './styles/index.scss';
import './assets/styles/media.scss';
import Index from './pages/MainPage';
import CenterWrapper from '$popup-service/components/CenterWrapper';
import { PopupsService } from '$popup-service/model/PopupsService';
import { PopupsContainerModel } from '$popup-service/model/Common';
import ETypeWrapper = PopupsContainerModel.ETypeWrapper;
import PopupsContainer from '$popup-service/components/PopupsContainer';

function App() {
  return (
    <>
      <PopupsContainer />
      <Index />
    </>
  );
}

export default App;
