import React from 'react';
import Header from '$components/Header';
import Banner from '$components/Banner';
import NewSkills from '$components/NewSkills';

function Index() {
  return (
    <>
      <Header />
      <Banner />
      <NewSkills />
      {/* <TopSection/> */}
      {/* <GameCardsSection/> */}
      {/* <HotGamesSection/> */}
      {/* <CountrySelect/> */}
      {/* <Footer/> */}
      <div className="mt-5">
        <Header inversion />
      </div>
      
    </>
  );
}

export default Index;
