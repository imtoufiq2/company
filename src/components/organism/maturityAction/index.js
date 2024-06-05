import { useNavigate } from "react-router-dom";
// Custom Components
import Image from "../../atoms/Image";
import Button from "../../atoms/button/Button";
import ReferralCard from "../referralCard";
import CongratulatoryMessage from "../../molecules/congratulatoryMessage";

const MaturityAction = () => {

  const navigate = useNavigate();
  return (
    //TODO: lot of components of this page need to reused instead of creating , already we have components
    //    md:w-[592px] md:rounded-xl md:p-8
    // <div className="mx-auto flex h-fit max-w-[592px] flex-col gap-5  py-2 md:w-[592px]  md:py-8">
       <div className="mx-auto mb-8 px-6 sm:px-0 mt-8 flex max-w-[1008px] flex-col gap-5  md:gap-7 w-full sm:max-w-[592px]">

      <CongratulatoryMessage message="Your FD investment was successful" />
      <div className="flex flex-col gap-5">
        <div  className="rounded-xl border-[0.5px] bg-white p-8">
          <div  className="flex flex-col gap-8">
            <div id="_second_top_first" className="flex items-center gap-4">
              <div
                id="bankLogo"
                className=" flex  h-[60px]  w-[60px]  items-center justify-center  rounded-full border  bg-white lg:h-[60px] lg:w-[60px]"
              >
                <Image
                  src="/images/SBI-logo.svg"
                  alt="bank logo"
                  className="h-[36px] w-[36px] lg:h-[36px] lg:w-[36px]"
                />
              </div>
              <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
                State Bank of India
              </h3>
            </div>
            <div id="_second_top_second" className="flex justify-between">
              <div id="_left" className="flex flex-col gap-2">
                <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                  Amount Invested
                </p>
                <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
                  ₹ 5,00,000
                </h3>
              </div>
              <div id="_middle" className="flex flex-col gap-2">
                <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                  Amount Invested
                </p>
                <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
                  8.70%
                </h3>
              </div>
              <div id="_right" className="flex flex-col gap-2">
                <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                  Amount Invested
                </p>
                <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
                  3 yr
                </h3>
              </div>
            </div>
            <div
              id="_second_top_third"
              className="flex flex-wrap items-center justify-between gap-2"
            >
              <p className="regular-text text-sm leading-6 tracking-[-0.2]">
                Your FD will mature on
                <span className="semi-bold-text">13 March 2027</span>
              </p>
              <p className="regular-text text-right text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]">
                Transaction ID: 837489BYSN009
              </p>
            </div>
          </div>
        </div>
        {/* ============= */}
        <ReferralCard isModify={true} />
      </div> 
      {/* TODO: ButtonNavigateDashboard use this componts for this */}
      <div
        id="_third"
        className="mx-auto flex cursor-pointer items-baseline gap-2"
        onClick={() => navigate("/")}
      >
        <Image src="/images/home-icon.svg" alt="home" />
        <Button
          onClick={() => {}}
          label="Go to Dashboard"
          className={`medium-text medium-text   text-[#21B546]" mx-auto    h-fit w-fit  text-[16px] text-lg leading-normal tracking-[-0.2] text-[#21B546] duration-300`}
        />
      </div>
    </div>
  );
};

export default MaturityAction;
