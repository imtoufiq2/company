import React, { useEffect } from "react";

import BottomHero from "./components/BottomHero/Index";
import FAQ from "./components/FAQ";
import NeedHelp from "./components/NeedHelp";
import ReferEarn from "./components/Refer&Earn";
import Shorttenures from "./components/Shorttenures/Index";
import LovingPeople from "./components/LovingPeople/Index";
import Video from "./components/Video/Index";
import HeroSection from "./components/HeroSection/Index";
const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <hr />
      <hr />
      <BottomHero />
      <hr />
      <hr />
      <LovingPeople /> <hr />
      <hr />
      <Shorttenures /> <hr />
      <hr />
      <Video /> <hr />
      <hr />
      <ReferEarn /> <hr />
      <hr />
      <NeedHelp /> <hr />
      <hr />
      <FAQ />
    </div>
  );
};

export default Home;
