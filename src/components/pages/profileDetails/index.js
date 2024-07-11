import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import LeftArrow from "../../../Icons/LeftArrow";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { getData } from "../../../utils/Crypto";
import Loader from "../../organism/loader";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const { investor_id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [loadingUser, setUserLoading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";

    async function getUserDetails() {
      try {
        setUserLoading(true);
        const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
          display_location: "PersonalDetails",
          fd_investment_id: 0,
          method: "Get",
          investor_id: Number(investor_id),
        });
        console.log("responseresponse", response?.data?.data);

        setUserDetails(response?.data?.data);
      } catch (error) {
        console.error("Error in handleSkip:", error);
      } finally {
        setUserLoading(false);
      }
    }
    getUserDetails();

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [investor_id]);

  const getValueOrDefault = (value, defaultValue = '-') => {
    return value ? value : defaultValue;
  };
  return (
    <>
      {loadingUser && <Loader />}
      {!loadingUser && (
        <div className="mx-auto  my-6 flex w-full max-w-[1008px] flex-col gap-10 px-5 sm:max-w-[592px] md:mt-8 md:px-0 md:pb-8">
          <span className="-mb-3 md:hidden ">
            <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} />
          </span>
          <div id="_header" className="flex flex-col gap-2">
            <h3 className="bold-text text-[28px] leading-9 tracking-[-0.5px] text-[#1B1B1B]">
              Personal Details
            </h3>
            <p className="regular-text text-sm leading-[22px] tracking-[-0.2px] text-[#5E718D]">
              View your basic information, address, occupation, nominee and
              other profile information
            </p>
          </div>
          <div id="_basic-details" className="flex flex-col gap-3">
            <h4 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
              Basic Details
            </h4>
            <div
              id="_basic-details-box"
              className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5"
            >
              <div
                id="_first"
                className="grid grid-cols-1 gap-5  md:grid-cols-2"
              >
                <div id="_left" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Name
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                 
                    {getValueOrDefault(userDetails?.basic_details?.investor_name)}
                  </h5>
                </div>
                <div id="_right" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Mobile Number
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                    +91    {getValueOrDefault(userDetails?.basic_details?.mobile_no)}
                  </h5>
                </div>
              </div>
              <div id="_second" className="flex flex-col gap-1">
                <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                  Email Address
                </h6>
                <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
              
                  {getValueOrDefault(userDetails?.basic_details?.email)}
                </h5>
              </div>
            </div>
          </div>
          <div id="_address" className="flex flex-col gap-3">
            <h4 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
              Address
            </h4>
            <div id="_address" className="flex flex-col gap-3">
              {userDetails?.addresses?.map((address) => {
                return (
                  <div
                    id="_basic-details-box"
                    className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5"
                  >
                    <div id="_address" className="flex flex-col gap-1">
                      <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                        From KYC
                      </h6>
                      <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                      {getValueOrDefault(address?.address_line_1)} - {getValueOrDefault(address?.pincode)}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="_more-information" className="flex flex-col gap-3">
            <h4 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
              More Information
            </h4>
            <div
              id="_basic-details-box"
              className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5"
            >
              <div
                id="_first"
                className="grid grid-cols-1 gap-5  md:grid-cols-2"
              >
                <div id="_left" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Resident Status
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                    {userDetails?.more_information?.is_indian_resident === 0
                      ? "Non-Indian Resident"
                      : "Indian Resident"}
                  </h5>
                </div>
                <div id="_right" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Marital Status
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                    {userDetails?.more_information?.is_married === 0
                      ? "Un-married"
                      : "Married"}
                  </h5>
                </div>
              </div>
              <div
                id="_second"
                className="grid grid-cols-1 gap-5  md:grid-cols-2"
              >
                <div id="_left" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Gender
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                
                    {getValueOrDefault(userDetails?.more_information?.gender)}
                  </h5>
                </div>
                <div id="_right" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Place of Birth
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                 
                    {getValueOrDefault(userDetails?.more_information?.place_of_birth)}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div id="_occupation_details" className="flex flex-col gap-3">
            <h4 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
              Occupation Details
            </h4>
            <div
              id="_basic-details-box"
              className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5"
            >
              <div
                id="_first"
                className="grid grid-cols-1 gap-5  md:grid-cols-2"
              >
                <div id="_left" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Occupation
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                
                    {getValueOrDefault(userDetails?.occupation_details?.occupation)}
                  </h5>
                </div>
                <div id="_right" className="flex flex-col gap-1">
                  <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                    Annual Income (in ₹)
                  </h6>
                  <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
              
                    {getValueOrDefault(userDetails?.occupation_details?.annual_income)}
                  </h5>
                </div>
              </div>
              <div id="_second" className="flex flex-col gap-1">
                <h6 className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
                  Source of Income
                </h6>
                <h5 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                {getValueOrDefault(userDetails?.occupation_details?.source_of_income)}
                
                </h5>
              </div>
            </div>
          </div>
          {/* <div id="_nominee-details"></div> */}
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
