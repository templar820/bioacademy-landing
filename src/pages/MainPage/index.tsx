import React from 'react';
import Header from '$components/Header';
import Banner from '$components/Banner';
import NewSkills from '$components/NewSkills';
import WebinarPlan from '$components/WebinarPlan';
import Profile from '$components/Profile';
import Education from '$components/Education';
import FeedBackForm from "$components/FeedBackForm";
import {isMobile} from "react-device-detect";

function Index() {
  return (
    <div className="land d-flex flex-column">
      {!isMobile && <Header/>}
      <Banner />
      <NewSkills/>
      <WebinarPlan/>
      <Profile/>
      <Education/>
      <FeedBackForm/>
      <Header inversion/>
    </div>
  );
}

export default Index;
