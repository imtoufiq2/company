import React, { lazy, Suspense, useCallback, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FooterSection from "../../organism/footerSection";
import Loader from "../../organism/loader";
import { fetchWithWait } from "../../../utils/method";
import { getData } from "../../../utils/Crypto";
import {
  fetchBanner,
  fetchFaq,
  fetchShowCase,
  fetchTestimonial,
} from "../../../redux/actions/dashboard";
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
  const { id: fdid } = useParams();

  sessionStorage.removeItem("fromWhere");
  useEffect(() => {
    sessionStorage.removeItem("Order_Summary");
  }, []);

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
      investor_id: getData("userData")?.investor_id ?? 0,
      payout_method_id: "C",
      tag_id: 1,
      category_id: 3,
    };
    fetchWithWait({ dispatch, action: fetchBanner(data) });
  }, [dispatch]);

  const handleShowCase = useCallback(() => {
    const data = {
      count: 10,
      display_location: "FDList",
      investor_id: getData("userData")?.investor_id,
      payout_method_id: "C",
      tag_id: 4,
      category_id: 5,
    };
    fetchWithWait({ dispatch, action: fetchShowCase(data) });
  }, [dispatch]);

  //get the testimonial data
  const handleTestimonials = useCallback(() => {
    const data = {
      investor_id: +getData("userData")?.investor_id ?? 0,
    };
    fetchWithWait({ dispatch, action: fetchTestimonial(data) });
  }, [dispatch]);

  //get the faq
  const handleGetFaq = useCallback(() => {
    const data = {
      investor_id: Number(getData("userData")?.investor_id) ?? 0,
      fd_id: fdid ? Number(fdid) : 0,
    };
    fetchWithWait({ dispatch, action: fetchFaq(data) });
  }, [dispatch, fdid]);

  useEffect(() => {
    sessionStorage.removeItem("fdId");
    handleBanners();
    handleShowCase();
    handleTestimonials();
    handleGetFaq();
  }, [handleBanners, handleGetFaq, handleShowCase, handleTestimonials]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

        <div className="flex flex-col items-center justify-center gap-10 pb-10 md:gap-20 md:pb-[6.75rem]">
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
