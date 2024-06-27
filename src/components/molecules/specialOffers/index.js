import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { endpoints } from "../../../services/endpoints";

const SpecialOffers = () => {
  const [offerData, setOfferData] = useState(null);
  const handleSpecialOffer = useCallback(async () => {
    try {
      const { data } = await axios.post(
        `${endpoints?.baseUrl}/products/getadditionalschemeinfo`,
        { investor_id: 462, fd_id: 3 },
      );
      console.log("asfdasdsrer", data);
      if (data?.status) {
        console.log("asfdasdsrer", data?.data);
        setOfferData(data?.data);
      }
    } catch (error) {}
  }, []);
  useEffect(() => {
    handleSpecialOffer();
  }, [handleSpecialOffer]);
  return (
    <div className="-mt-3 flex flex-col gap-3 rounded-xl border-[0.5px] border-[#95E5A9] bg-[#F2FFF5] px-5 py-4 md:-mb-[43px] md:-mt-10 md:gap-2 ">
      {offerData?.map((curOffer) => {
        return (
          <div id="_first" className="flex items-center gap-4">
            <img
              id="_left"
              // src="/images/WomenBenefitIcon.svg"
              src={curOffer?.icon==="senior_citizen" ? "/images/SeniorCitizenBenefitIcon.svg" : "/images/WomenBenefitIcon.svg"}
              alt="SeniorCitizen"
            />
            <h4
              id="_right"
              className="regular-text text-xs leading-5 tracking-[-0.2] text-[#21B546] md:text-sm md:leading-6"
            >
             {curOffer?.scheme_note}
            </h4>
          </div>
        );
      })}

      {/* <div id="_second" className="flex items-center gap-4">
        <img
          id="_left"
          src="/images/SeniorCitizenBenefitIcon.svg"
          alt="SeniorCitizen"
        />
        <h4
          id="_right"
          className="regular-text text-xs leading-5 tracking-[-0.2] text-[#21B546] md:text-sm md:leading-6"
        >
          Additional 0.50%* p.a. for Senior Citizens
        </h4>
      </div> */}
    </div>
  );
};

export default SpecialOffers;
