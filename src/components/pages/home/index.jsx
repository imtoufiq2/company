import React, { lazy, Suspense, useEffect } from "react";

import { useDispatch } from "react-redux";
// import { fetchBankInfo } from "../../../redux/slice/allBankSlice";
import FooterSection from "../../organism/footerSection";
import Loader from "../../organism/loader";
// Dynamically import components using React.lazy
const FDOptionsExplorer = lazy(
  () => import("../../organism/fDOptionsExplorer"),
);
const FaqSection = lazy(() => import("../../organism/faqSection"));
const SupportSection = lazy(() => import("../../organism/supportSection"));
const ReferralCard = lazy(() => import("../../organism/referralCard"));
const InterestIndex = lazy(() => import("../../organism/interestIndex"));
const CustomerTestimonials = lazy(
  () => import("../../organism/customerTestimonials"),
);
const FDInvestmentPresentation = lazy(
  () => import("../../organism/fDInvestmentPresentation"),
);
const SecureInvestWidget = lazy(
  () => import("../../organism/secureInvestWidget"),
);

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchBankInfo());
  }, [dispatch]);

  useEffect(() => {
    // document.body.style.backgroundColor = "#F9FAFB";
    document.body.style.backgroundColor = "#fff";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className="bg-white ">
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Loader />
          </div>
        }
      >
        <SecureInvestWidget />

        <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-10">
          <FDOptionsExplorer />
          {/* <Shorttenures /> */}
          <InterestIndex />
          {/* <ReferEarn /> */}
          <ReferralCard />
          <FDInvestmentPresentation />
          <CustomerTestimonials />
          {/* <NeedHelp /> */}
          <SupportSection />

          {/* <FAQ /> */}
          <FaqSection />
        </div>
      </Suspense>

      <FooterSection />
    </div>
  );
};

export default Home;
