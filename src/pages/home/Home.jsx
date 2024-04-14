import React, { lazy, Suspense, useEffect } from "react";
import Footer from "./components/footer/Index";
import { useDispatch } from "react-redux";
import { fetchBankInfo } from "../../redux/slice/allBankSlice";
import Loader from "../../components/Loader";
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
    <div className="bg-white ">
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <HeroSection />

        <div className="flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-10">
          <BottomHero />
          <Shorttenures />
          <ReferEarn />
          <Video />
          <LovingPeople />
          <NeedHelp />

          <FAQ />
        </div>
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
