import React from 'react';
import { isMobile } from 'react-device-detect';
import Header from './Header';
import Banner from './Banner';
import NewSkills from './NewSkills';
import WebinarPlan from './WebinarPlan';
import Profile from './Profile';
import Education from './Education';
import FeedBackForm from './FeedBackForm';

function Index() {
  console.log(true);
  return (
    <div className="land d-flex flex-column">
      {!isMobile && <Header />}
      <Banner />
      <NewSkills />
      <WebinarPlan />
      <Profile />
      <Education />
      <FeedBackForm />
      <Header inversion />
    </div>
  );
}

export default Index;
