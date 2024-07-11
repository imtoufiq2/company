import React from "react";

import Heading from "../../atoms/headingContent/Heading";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";

const InvestDetailsSupportSection = () => {
  return (
    <div className="flex justify-between overflow-hidden rounded-xl bg-[#048746] p-5 md:p-8">
      <div
        id="_left"
        className="flex flex-col gap-6 md:max-w-[350px] "
        // style={{ border: "1px solid red" }}
      >
        <Heading
          text="Need help with your FD investment?"
          type="h2"
          className="bold-text min-w-[183px]  max-w-60 text-lg text-white md:-mb-4   md:max-w-full  md:text-xl "
        />
        <p className="regular-text hidden text-sm leading-5 tracking-[-0.2px] text-[#E8FFED] md:block">
          Our expert financial advisors will guide you through a step-by-step
          process towards a safe and high returns investment.
        </p>
        <div
          id="button"
          className=" hidden flex-col gap-3 text-white   md:flex "
        >
          {/* Phone Call Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[16px] leading-7 tracking-[-0.3px]"
          >
            <Image src="/images/PhoneCallWhite.svg" alt="call box" />

            <TextDisplay
              id="mobile-number"
              text="Call at +91 9876 543210"
              elementType="span"
              className="medium-text text-base leading-7 tracking-[-0.3px] text-white"
            />
          </a>

          {/* Email Button */}
          <a
            href="mailto:consult@altcase.com?subject=Your%20Subject%20Here&body=Your%20email%20body%20here"
            className="flex items-center gap-2 text-[16px] leading-7 tracking-[-0.3px]"
          >
            <Image src="/images/Envelope.svg" alt="mail box" />

            <TextDisplay
              id="mobile-number"
              text="Email at consult@altcase.com"
              elementType="span"
              className="medium-text text-base leading-7 tracking-[-0.3px] text-white"
            />
          </a>
        </div>
        <div
          className="flex w-full max-w-[162px] items-center gap-1 rounded-md bg-[#F2FFF5] px-3  py-[6px] md:hidden"
          onClick={() => console.log("Button clicked")}
          newStructure={true}
        >
          <Image src="/images/PhoneCall.svg" alt="Talk to our expert" />

          <TextDisplay
            id="example"
            text="Talk to our expert"
            elementType="span"
            className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#21B546]"
          />
        </div>
      </div>

      <img
        src="/images/need-help-with.svg"
        alt=""
        className="388:-right-5   416:-right-10 1104:-right-[4rem] relative max-h-[124px] sm:-right-10 md:min-h-[197.8px] md:max-w-[230.67px] lg:right-0"
      />
    </div>
  );
};

export default InvestDetailsSupportSection;
