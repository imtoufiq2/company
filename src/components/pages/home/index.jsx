import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import FooterSection from "../../organism/footerSection";
import Loader from "../../organism/loader";
import { fetchWithWait } from "../../../utils/method";
import { requestOtpForMobile } from "../../../redux/actions/login";
import { getData } from "../../../utils/Crypto";
import { fetchBanner, fetchShowCase } from "../../../redux/actions/dashboard";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
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
  const [testimonials, setTestimonials] = useState([]);

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
      // category_id: 3,
    };
    fetchWithWait({ dispatch, action: fetchBanner(data) });
  }, [dispatch]);

  // const handleShowCase = useCallback(() => {
  //   const data = {
  //     count: 4,
  //     display_location: "FDList",
  //     investor_id: getData("userData")?.investor_id,
  //     payout_method_id: "C",
  //     tag_id: 4,
  //   };
  //   fetchWithWait({ dispatch, action: fetchShowCase(data) });
  // }, [dispatch]);
  const handleShowCase = useCallback(() => {
    const data = {
      count: 10,
      display_location: "FDList",
      investor_id: getData("userData")?.investor_id,
      payout_method_id: "C",
      tag_id: 4,
      // category_id: 5,
    };
    fetchWithWait({ dispatch, action: fetchShowCase(data) });
  }, [dispatch]);
  const handleTestimonials = useCallback(async () => {
    const data = {
      investor_id: +getData("userData")?.investor_id ?? 0,
    };
    const response = await axios.post(
      `${endpoints?.baseUrl}/products/gettestimonials`,
      data,
    );
    const curColor = ["#FFF2C4", "#FFDCDA", "#E8FFED"];

    console.log("responseresponse", response?.data?.data);
    const updatedTestimonial = response?.data?.data?.map((curVal, index) => {
      // Use modulo operator to cycle through the colors
      const colorIndex = index % curColor.length;
      return { ...curVal, color_code: curColor[colorIndex] };
    });

    console.log("updatedTestimonial", updatedTestimonial);

    // setTestimonials(response?.data?.data);
    setTestimonials(updatedTestimonial);
  }, []);
  useEffect(() => {
    sessionStorage.removeItem("fdId");
    handleBanners();
    handleShowCase();
    handleTestimonials();
  }, [handleBanners, handleShowCase, handleTestimonials]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  console.log(
    "asfdasdfasfasfd",
    JSON.parse(sessionStorage.getItem("panVerificationInfo")),
  );
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
          <CustomerTestimonials testimonials={testimonials} />
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
