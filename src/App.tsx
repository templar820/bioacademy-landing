import React from 'react';
import './styles/index.scss';
import './assets/styles/media.scss';
import {Helmet} from "react-helmet";
import Index from './pages/MainPage';
import PopupsContainer from '$popup-service/components/PopupsContainer';
import Loader from '$common/Loader';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Loader/>
      <PopupsContainer />
      <Index />
    </>
  );
}

export default App;
