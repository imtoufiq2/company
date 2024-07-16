import React from "react";
import FaqSection from "../faqSection";

const HelpAndSupportSection = () => {
  return (
    <div
      className={`mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col  gap-6  md:w-[65%] md:gap-8 lg:w-[50%]`}
    >
      <div id="_top">
        <div id="_top_top" className="flex flex-col gap-2">
          <h3 className="bold-text text-[1.75rem] leading-9 tracking-[-0.5px] text-[#1B1B1B]">
            Help & Support
          </h3>
          <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D]">
            Get answers to your questions or contact our customer care executive
          </p>
        </div>
        <div id="_top_bottom">
          <FaqSection className={"mx-0 w-full md:w-full"} profile={true} />
        </div>
      </div>
      <div
        id="_bottom"
        className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5"
      >
        <div id="_top-section" className="flex flex-col gap-3 ">
          <h3
            id="_heading"
            className="bold-text text-xl leading-8 tracking-[-0.3px] text-[#21B546]"
          >
            Need further help?
          </h3>
          {/* <p
            id="paragraph"
            className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]"
          >
            Lorem ipsum dolor sit amet consectetur sedo adipiscing orem ipsum
            dolor sit amet consectetur sedo adipiscing.
          </p> */}
        </div>
        <div
          id="_contactsource"
          className="flex flex-col justify-between gap-5 md:flex-row"
        >
          <div
            id="_email"
            className="flex items-center justify-between md:flex-1"
          >
            <div id="_left">
              <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                Customer Support Email
              </p>
              <div id="_right" className="flex items-center gap-2">
                <h3 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                  support@altcase.com
                </h3>{" "}
                <img src="/images/green-envelope.svg" alt="envelope" />
              </div>
            </div>
          </div>
          <div
            id="_contact"
            className="flex items-center justify-between md:flex-1"
          >
            <div id="_left">
              <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                Customer Support Mobile
              </p>
              <div id="_right" className="flex items-center gap-2">
                <h3 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
                  8828408893
                </h3>
                <img
                  src="/images/PhoneCall.svg"
                  alt="PhoneCall"
                  // className="h-[0.843rem] w-[1.125rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="_working-hr">
          <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
            Working Hours
          </p>
          <h3 className="medium-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]">
            Monday - Saturday • 10:00 am to 8:00 pm
            
          </h3>
        </div>
      </div>
      <div id="_spacing" className="h-6"></div>
    </div>
  );
};

export default HelpAndSupportSection;
