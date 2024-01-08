import React from 'react';
import Header from '$components/Header';
import Banner from '$components/Banner';
import NewSkills from '$components/NewSkills';
import WebinarPlan from '$components/WebinarPlan';
import Profile from '$components/Profile';
import Education from '$components/Education';
import FeedBackForm from "$components/FeedBackForm";

function Index() {
  return (
    <div className="land d-flex flex-column">
      <Header />
      <Banner />
      <NewSkills />
      <WebinarPlan />
      <Profile />
      <Education />
      <FeedBackForm />
      <div className="mt-5">
        <Header inversion />
      </div>
      
    </div>
  );
}

export default Index;
