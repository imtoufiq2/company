import React, { lazy, Suspense, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";
import FooterSection from "../../organism/footerSection";
import Loader from "../../organism/loader";
import { fetchWithWait } from "../../../utils/method";
import { requestOtpForMobile } from "../../../redux/actions/login";
import { getData } from "../../../utils/Crypto";
import { fetchBanner, fetchShowCase } from "../../../redux/actions/dashboard";
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
  const handleBanners = useCallback(() => {
    const data = {
      count: 1,
      display_location: "FDList",
      investor_id: getData("userData")?.investor_id,
      payout_method_id: "C",
      tag_id: 1,
    };
    fetchWithWait({ dispatch, action: fetchBanner(data) });
  }, [dispatch]);

  const handleShowCase = useCallback(() => {
    const data = {
      count: 4,
      display_location: "FDList",
      investor_id: getData("userData")?.investor_id,
      payout_method_id: "C",
      tag_id: 4,
    };
    fetchWithWait({ dispatch, action: fetchShowCase(data) });
  }, [dispatch]);
  useEffect(() => {
    handleBanners();
    handleShowCase();
  }, [handleBanners, handleShowCase]);
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

        <div className="flex flex-col items-center justify-center gap-10 md:gap-20">
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
