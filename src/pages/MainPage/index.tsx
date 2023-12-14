import React from 'react';
import Header from '$components/Header';
import Banner from '$components/Banner';
import NewSkills from '$components/NewSkills';
import WebinarPlan from "$components/WebinarPlan";

function Index() {
  return (
    <div className={"land d-flex flex-column"}>
      <Header/>
      <Banner/>
      <NewSkills/>
      <WebinarPlan/>
      {/* <GameCardsSection/> */}
      {/* <HotGamesSection/> */}
      {/* <CountrySelect/> */}
      {/* <Footer/> */}
      <div className="mt-5">
        <Header inversion/>
      </div>
    
    </div>
  );
}

export default Index;
