import React, { lazy, Suspense, useEffect } from "react";
import Footer from "./components/footer/Index";
import { useDispatch, useSelector } from "react-redux";
import { fetchBankInfo } from "../../redux/slice/allBankSlice";
import { useGet } from "../../hooks/useGet";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBankInfo());
  }, [dispatch]);
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-10">
      <HeroSection />
      <BottomHero />
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            Loading...
          </div>
        }
      >
        {/* <HeroSection /> */}

        <Shorttenures />
        <ReferEarn />
        <Video />
        <LovingPeople />
        <NeedHelp />

        <FAQ />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
