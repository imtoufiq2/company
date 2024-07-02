import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import LeftArrow from "../../../Icons/LeftArrow";


const ProfileDetails = () => {
  const navigate=useNavigate()

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className="mx-auto  flex w-full max-w-[1008px] flex-col gap-10 px-5 sm:max-w-[592px] md:px-0 my-6 md:mt-8 md:pb-8">
       <span className="md:hidden -mb-3 ">
        <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} /> 
        </span>
      <div id="_header" className="flex flex-col gap-2">
        <h3 className="bold-text text-[28px] leading-9 tracking-[-0.5] text-[#1B1B1B]">
          Personal Details
        </h3>
        <p className="regular-text text-sm leading-[22px] tracking-[-0.2] text-[#5E718D]">
          View your basic information, address, occupation, nominee and other
          profile information
        </p>
      </div>
      <div id="_basic-details" className="flex flex-col gap-3">
        <h4 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#5E718D]">
          Basic Details
        </h4>
        <div
          id="_basic-details-box"
          className="flex flex-col gap-5 rounded-xl border-[0.5px] p-5 bg-white"
        >
          <div id="_first" className="grid grid-cols-1 gap-5  md:grid-cols-2">
            <div id="_left" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Name
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                Sameer Malhotra
              </h5>
            </div>
            <div id="_right" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Mobile Number
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                +91 98765 43210
              </h5>
            </div>
          </div>
          <div id="_second" className="flex flex-col gap-1">
            <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
              Email Address
            </h6>
            <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
              sameer.malhotra@gmail.com
            </h5>
          </div>
        </div>
      </div>
      <div id="_address" className="flex flex-col gap-3">
        <h4 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#5E718D]">
          Address
        </h4>
        <div
          id="_basic-details-box"
          className="flex flex-col gap-5 rounded-xl border-[0.5px] p-5 bg-white"
        >
          <div id="_address" className="flex flex-col gap-1">
            <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
              From KYC
            </h6>
            <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
              1603, Whitelily, Nahar Amritshakti, Chandivali, Andheri (E),
              Mumbai - 400072
            </h5>
          </div>
        </div>
      </div>
      <div id="_more-information" className="flex flex-col gap-3">
        <h4 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#5E718D]">
          More Information
        </h4>
        <div
          id="_basic-details-box"
          className="flex flex-col gap-5 rounded-xl border-[0.5px] p-5 bg-white"
        >
          <div id="_first" className="grid grid-cols-1 gap-5  md:grid-cols-2">
            <div id="_left" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Resident Status
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                Indian Resident
              </h5>
            </div>
            <div id="_right" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Marital Status
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                Married
              </h5>
            </div>
          </div>
          <div id="_second" className="grid grid-cols-1 gap-5  md:grid-cols-2">
            <div id="_left" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Gender
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                Male
              </h5>
            </div>
            <div id="_right" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Place of Birth
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                Mumbai
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div id="_occupation_details" className="flex flex-col gap-3">
        <h4 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#5E718D]">
          Occupation Details
        </h4>
        <div
          id="_basic-details-box"
          className="flex flex-col gap-5 rounded-xl border-[0.5px] p-5 bg-white"
        >
          <div id="_first" className="grid grid-cols-1 gap-5  md:grid-cols-2">
            <div id="_left" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Occupation
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                Salaried
              </h5>
            </div>
            <div id="_right" className="flex flex-col gap-1">
              <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
                Annual Income (in ₹)
              </h6>
              <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
                50L & above
              </h5>
            </div>
          </div>
          <div id="_second" className="flex flex-col gap-1">
            <h6 className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D]">
              Source of Income
            </h6>
            <h5 className="medium-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B]">
              Salary
            </h5>
          </div>
        </div>
      </div>
      {/* <div id="_nominee-details"></div> */}
    </div>
  );
};

export default ProfileDetails;
