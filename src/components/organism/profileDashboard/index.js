import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { getLocalStorageData } from "../../../utils/Crypto";
import { fetchWithWait } from "../../../utils/method";

import {
  deleteUser,
  fetchMainProfileDetail,
} from "../../../redux/actions/profile";
import Avatar from "../../molecules/Avatar";
import Button from "../../atoms/button/Button";
import Loader from "../loader";
import EmptyState from "../emptyState";

const ProfileDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    ApplicationLoader: { loading },
    profile: { mainProfileDetail, mainProfileDetailError },
  } = useSelector((state) => state);

  const getProfileDetail = useCallback(() => {
    const data = {
      display_location: "Profile",
      method: "Get",
      investor_id: Number(getLocalStorageData("uInfo")?.investor_id),
    };
    fetchWithWait({ dispatch, action: fetchMainProfileDetail(data) });
  }, [dispatch]);

  //this is for the delete user
  const deleteUserProfile = useCallback(() => {
    const data = {
      investor_id: Number(getLocalStorageData("uInfo")?.investor_id),
    };
    fetchWithWait({ dispatch, action: deleteUser(data) })
      .then((res) => {
        if (res?.status === 200) {
          toast.success("User profile deleted successfully.");
          navigate("/login");
          localStorage.clear();
          sessionStorage.clear();
        } else {
          toast.error("Failed to delete user profile. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again later.");
        console.error("Error in deleteUserProfile:", error);
      });
  }, [dispatch, navigate]);

  useEffect(() => {
    getProfileDetail();
  }, [getProfileDetail]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : mainProfileDetailError ? (
        "soemthign went wrong"
      ) : mainProfileDetail && Object.keys(mainProfileDetail).length > 0 ? (
        <>
          <div id="_profile" className="flex max-h-20 items-center gap-5">
            <div id="_left">
              {/* TODO : make the avatar as customisable  */}
              <Avatar
                className="h-20 w-20"
                profileCompleted={
                  mainProfileDetail?.profileDetails?.profile_score ?? 0
                }
                imgUrl={mainProfileDetail?.profileDetails?.image_base64}
              />
            </div>
            <div id="_right" className="flex flex-col gap-3">
              <div id="_top" className="flex flex-col gap-1">
                <h3 className="bold-text text-xl leading-8 tracking-[-0.3px]">
                  {mainProfileDetail?.profileDetails?.investor_name
                    ? mainProfileDetail?.profileDetails?.investor_name
                    : "New User"}
                </h3>
                <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D] md:text-base md:leading-7 md:tracking-[-0.3px]">
                  +91{" "}
                  {mainProfileDetail?.profileDetails?.mobile_no
                    ?.replace(/(\d{5})/g, "$1 ")
                    .trim()}
                </p>
              </div>
              <div
                id="_bottom"
                className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#21B546] md:text-base md:leading-7 md:tracking-[-0.3px]"
              >
                Your profile is{" "}
                {mainProfileDetail?.profileDetails?.profile_score}% complete
              </div>
            </div>
          </div>
          {!mainProfileDetail?.profileDetails?.is_ckyc_verified && (
            <div
              id="_kyc"
              className="flex max-h-[5.25rem] items-center justify-between gap-5 rounded-xl bg-[#15362B] p-5 text-white md:px-8"
            >
              <p
                id="_left"
                className="bold-text text-sm leading-6 tracking-[-0.2px] md:text-base md:leading-7 md:tracking-[-0.3px] "
              >
                Complete your KYC to become investment ready!
              </p>

              <Button
                label="Do KYC"
                className="medium-text h-fit  max-w-[4.5625rem] whitespace-nowrap rounded-md bg-[#21B546] px-3 py-[6px] text-sm leading-6 tracking-[-0.2px] md:max-w-32"
                onClick={() => {
                  navigate("/kyc");
                }}
              />
            </div>
          )}
          <div id="_box_button" className="flex flex-col gap-3">
            {mainProfileDetail?.profileData &&
              mainProfileDetail?.profileData?.map((curVal, index) => {
                return (
                  <div
                    key={index}
                    id="_profile"
                    className="flex max-h-[4.875rem] cursor-pointer items-center gap-5 rounded-xl border-[0.5px] bg-white p-5"
                    onClick={() => {
                      if (curVal?.titleDetails) {
                        if (
                          mainProfileDetail?.profileDetails.is_ckyc_verified ===
                          0
                        ) {
                          toast.error(
                            "Your CKYC is pending. Kindly do your KYC first.",
                          );
                        } else {
                          navigate(curVal?.navigate);
                        }
                        return;
                      }
                      navigate(curVal?.navigate);
                    }}
                  >
                    <div id="_left" className="rounded-md border p-[0.625rem]">
                      {/* TODO : check the icon and chnage it import from the figma */}
                      <img
                        src={curVal.url}
                        alt="UserPlus"
                        className="h-[1.125rem] w-[1.125rem]"
                      />
                    </div>
                    <div id="_middle" className="flex-1">
                      <h5 className="medium-text  text-sm leading-6 tracking-[-0.2px] md:text-base md:leading-7 md:tracking-[-0.3px]">
                        {curVal.title}
                      </h5>
                      {curVal?.titleDetails && (
                        <span className="flex items-center gap-1 ">
                          {curVal?.titleDetails?.logo && (
                            <img
                              src={curVal?.titleDetails?.logo}
                              alt="bank"
                              className="h-4 w-4 rounded"
                            />
                          )}

                          {mainProfileDetail?.profileDetails
                            ?.primary_account_no && (
                            <p className="regular-text mt-[0.15rem] text-xs leading-5 tracking-[-0.2px] text-slate-500">
                              {curVal?.titleDetails?.accountNumber} •{" "}
                              {curVal?.titleDetails?.accountType}
                            </p>
                          )}
                        </span>
                      )}
                    </div>

                    <div
                      id="_right"
                      // onClick={() => {
                      //   if (curVal?.titleDetails) {
                      //     if (
                      //       mainProfileDetail?.profileDetails
                      //         .is_ckyc_verified === 0
                      //     ) {
                      //       toast.error(
                      //         "Your CKYC is pending. Kindly do your KYC first.",
                      //       );
                      //     } else {
                      //       navigate(curVal?.navigate);
                      //     }
                      //     return;
                      //   }
                      //   navigate(curVal?.navigate);
                      // }}
                    >
                      <img
                        src="/images/CaretRight.svg"
                        alt=""
                        className="h-5 w-5 cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-wrap   items-center justify-between gap-3 md:gap-5">
            <Button
              onClick={() => {
                sessionStorage.clear();
                localStorage.clear();
                navigate("/");
              }}
              label="Logout"
              className="bold-text max-h-9 w-fit rounded-lg border  border-green-600 bg-white px-3 text-sm text-green-600 hover:bg-green-600 hover:text-white"
            />
            <Button
              onClick={deleteUserProfile}
              label="Delete Account"
              className="bold-text max-h-9 w-fit rounded-lg border  border-red-600 bg-white px-3 text-sm text-red-600 hover:bg-red-600 hover:text-white"
            />
          </div>

          <div
            id="_footerInfo"
            className="regular-text mt-3 flex max-h-16 flex-col gap-3 text-xs leading-5 tracking-[-0.2px] text-[#AFBACA] md:max-h-[4.5rem] md:text-sm md:leading-6"
          >
            <img
              src="/images/fadealtcaseLogo.svg"
              alt="fadealtcaseLogo"
              className="h-4 w-[4.44375rem]"
            />
            <div className="flex flex-col gap-1 ">
              <h5>App Version 1.0.1</h5>
              <p>
                © {new Date().getFullYear()} Altcase Investments Private
                Limited
              </p>
            </div>
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default ProfileDashboard;
