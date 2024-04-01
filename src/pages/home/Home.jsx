// import React, { useEffect } from "react";

// import BottomHero from "./components/BottomHero/Index";
// import FAQ from "./components/FAQ";
// import NeedHelp from "./components/NeedHelp";
// import ReferEarn from "./components/Refer&Earn";
// import Shorttenures from "./components/Shorttenures/Index";
// import LovingPeople from "./components/LovingPeople/Index";
// import Video from "./components/Video/Index";
// import HeroSection from "./components/HeroSection/Index";
// const Home = () => {
//   return (
//     <div className="bg-white">
//       <HeroSection />
//       <hr />
//       <hr />
//       <BottomHero />
//       <hr />
//       <hr />
//       <LovingPeople /> <hr />
//       <hr />
//       <Shorttenures /> <hr />
//       <hr />
//       <Video /> <hr />
//       <hr />
//       <ReferEarn /> <hr />
//       <hr />
//       <NeedHelp /> <hr />
//       <hr />
//       <FAQ />
//     </div>
//   );
// };

// export default Home;
import React, { lazy, Suspense } from "react";

// Dynamically import components using React.lazy
const BottomHero = lazy(() => import("./components/BottomHero/Index"));
const FAQ = lazy(() => import("./components/FAQ"));
const NeedHelp = lazy(() => import("./components/NeedHelp"));
const ReferEarn = lazy(() => import("./components/Refer&Earn"));
const Shorttenures = lazy(() => import("./components/Shorttenures/Index"));
const LovingPeople = lazy(() => import("./components/LovingPeople/Index"));
const Video = lazy(() => import("./components/Video/Index"));
const HeroSection = lazy(() => import("./components/HeroSection/Index"));

const Home = () => {
  return (
    <div className="bg-white ">
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            Loading...
          </div>
        }
      >
        <HeroSection />

        <div className="flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-10">
          <BottomHero />
          <LovingPeople />
          <Shorttenures />
          <Video />
          <ReferEarn />
          <NeedHelp />
          <FAQ />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
