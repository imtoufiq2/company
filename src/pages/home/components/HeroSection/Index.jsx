import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import Example from "../progressProfile/Wrapper";
import { heroData } from "../../../../constants/staticData";
import FireIcon from "../../../../assets/images/Fire.svg"
import goodMorningIcon from "../../../../assets/images/goodMorning.svg"
import Lightbulb from "../../../../assets/images/Lightbulb.svg"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { getData } from "../../../../utils/Crypto";
import { usePost } from "../../../../hooks/usePost";
import toast from "react-hot-toast";

const Index = () => {
  const [userLogedIn, setUserLogedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const userData = getData("userData");
      if (userData?.access_token) {
        setUserLogedIn(true);
      } else {
        setUserLogedIn(false);
      }
      setTimeout(checkLoginStatus, 1000);
    };
    checkLoginStatus();

    return () => clearTimeout(checkLoginStatus);
  }, []);

  const [bankDetails, setBankDetails] = useState([]);

  const { postData } = usePost();
  const fetchTheFdDetails = async (e) => {
    try {
      const { data } = await postData("/dashboard/fd", {
        count: 0,
        display_location: "Dashboard",
        fd_id: 0,
        tag: "Banner",
      });
      console.log("datas0000000000", data);
      if (data?.status === 200) {
        setBankDetails(data?.data);
      } else {
        toast.error("somethings went wrong");
      }
    } catch (error) {
      console.error(error);
      // toast.error("somethings went wrong");
    }
  };
  useEffect(() => {
    fetchTheFdDetails();
  }, []);

  console.log("bankDetailsbankDetailsbankDetails,", bankDetails);
  return (
    <div
      id="mainParent"
      className="lg:bg-[#C2F2CE] lg:mb-[100px] max-w-[1280px] m-auto rounded-[32px] lg:mt-[40px] lg:py-[60px]  lg:pb-0"
    >
      <div
        id="parent"
        className="max-w-[1008px] xl:w-full   lg:w-[75%] mx-auto w-full mb-[10px] flex flex-col lg:flex-row lg:gap-2"
      >
        <div
          id="leftParent"
          className=" bg-[#C2F2CE] pb-[100px] lg:pb-0 lg:w-[60%] "
        >
          <div
            id="left"
            className="w-[90%] lg:w-full  flex flex-col gap-4    m-auto  pt-3 lg:pt5    lg:h-fit "
          >
            <div id="first" className="flex justify-between items-center ">
              <div
                id="left"
                className="font-normal text-[16px] lg:text-[20px]  leading-7  flex gap-1 items-center tracking-[-0.3] "
              >
                <img
                  src={goodMorningIcon}
                  alt="greeting icon"
                  className="w-5 h-5 text-[#000]"
                />
                <span>
                  Good Morning,{" "}
                  <span
                    className={`font-bold ${
                      userLogedIn ? "visible" : "invisible"
                    }`}
                  >
                    Sameer!
                  </span>
                </span>
              </div>

              <span
                className={`md:hidden ${userLogedIn ? "visible" : "invisible"}`}
              >
                <Example label="Arbitrary content" className="">
                  <CircularProgressbarWithChildren
                    value={60}
                    strokeWidth={5}
                    styles={buildStyles({
                      pathColor: "#21B546",
                    })}
                  >
                    <img
                      style={{
                        width: "82%",
                        height: "82%",
                        borderRadius: "100%",
                        objectFit: "cover",
                      }}
                      src={
                        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                      }
                      alt="avatar with progress bar"
                    />
                  </CircularProgressbarWithChildren>
                </Example>
              </span>
            </div>

            <h2
              id="second"
              className=" font-bold text-[20px] lg:text-4xl xl:text-5xl leading-8 tracking-[-0.3] text-[#1B1B1B]  lg:font-semibold lg:leading-[60px]  lg:tracking-[-0.1] xl:font-semibold xl:leading-[60px]  xl:tracking-[-0.1] "
            >
              Invest in fixed deposits and earn{" "}
              <span className=" block sm:inline-block ">
                returns <span className="text-[#21B546]">
  {bankDetails?.rate_of_interest ? `up to ${bankDetails.rate_of_interest} %` : "Rates Not Available"}
</span>

              </span>
            </h2>
            <div id="third " className="flex flex-col gap-3 ">
              <div
                id="thirtop"
                className="flex items-center gap-2 text-[#5E718D]"
              >
                <img
                  src={Lightbulb}
                  alt="Lightbulb"
                  className="w-[18px] h-[18px]"
                />
                <p className="text-sm font-medium leading-6   lg:text-lg lg:leading-[30px]  lg:tracking-[-0.3] ">
                  Reasons to invest with us
                </p>
              </div>
              <div
                id="thirdImages"
                className="flex gap-1 sm:gap-2 justify-between lg:gap-3 m-auto w-full sm:flex-wrap"
              >
                {heroData?.map((data, index) => (
                  <ImageCard key={index} data={data} />
                ))}

                {/* <ImageCard />
                <ImageCard /> */}
              </div>
            </div>
          </div>
        </div>
        <div
          id="right"
          //
          className="p-0 lg:p-3 w-[90%] max-w-[320px] lg:min-w-[320px] mx-auto -translate-y-[20%] min-h-[350px] bg-white rounded-2xl border-[0.5px]      lg:w-[35%]   lg:translate-y-[47%] pr-0 sm:pr-0 lg:h-fit 1039:translate-y-[15%] lg:pb-0 lg:mr-0 lg:pt-0"
        >
          {/* {bankDetails?.length>0 && 
            bankDetails?.map((curFd)=>{
              return ()
            })
          } */}
          <div
            id="bankLogo"
            // -translate-y-1/2
            className="w-[60px] h-[60px]  m-auto  rounded-full flex justify-center items-center  bg-white lg:w-[80px] lg:h-[80px] border border-[#D4FC79] -translate-y-1/2"
          >
            <img
              src={bankDetails?.logo_url}
              alt=""
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 sm:gap-5 lg:gap-6 justify-between p-5  sm:py-6 sm:pt-0 lg:p-7  py-3 pt-0 lg:pt-0 lg:-translate-y-3 lg:pb-2 pb-4 sm:pb-4 ">
            <div
              id="badget"
              className="bg-[#FFF6ED] flex m-auto w-fit px-[6px] py-[2px] gap-[6px] lg:gap-[10px] lg:py-1 lg:px-2  rounded-md "
            >
              <img src={FireIcon} alt="Popular Icon" />
              <p className="font-medium text-[12px]   leading-5  tracking-[-0.2] text-orange-500 lg:text-sm   lg:leading-6">
                Popular
              </p>
            </div>
            {/* {curBank?.rate_of_interest ? `${curBank.rate_of_interest}%` : ""} */}
            <h3
              id="bankName"
              className="font-bold text-[16px] leading-7  tracking-[-0.3] text-center lg:text-[20px]  lg:leading-8"
            >
              {bankDetails?.issuer_name}
            </h3>
            <div id="earUpto" className="">
              {bankDetails?.rate_of_interest ? (
                <>
                  <p className="text-[12px]  font-normal leading-5  tracking-[-0.2] text-center lg:text-[14px]  lg:leading-6">
                    Earn up to
                  </p>
                  <h3 className="font-bold text-[28px] tracking-[-0.5] leading-9  text-[#21B546] text-center lg:text-[32px]  lg:leading-10">
                    <span>{bankDetails?.rate_of_interest}% </span>{" "}
                    <span className="text-sm">p.a.</span>
                  </h3>
                </>
              ) : (
                ""
              )}
            </div>
            <div id="avatar" className=" text-center">
              <p className="font-normal text-[12px]  tracking-[-0.2]  leading-6 text-[#5E718D] lg:text-[14px]">
                Invested by 12,000+ investors{" "}
              </p>
              <div
                id="avatarGroup"
                className="flex relative justify-center items-center"
              >
                <Avatar />
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
