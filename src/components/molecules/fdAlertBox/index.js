import React from "react";
import CrossIcon from "../../../Icons/CrossIcon";
import { useSelector } from "react-redux";
import { extractPercentages, getUserGender } from "../../../utils/commonUtils";

const FdAlertBox = ({ setShowAlert, alertData, isSeniorCitizen }) => {
  const {
    investDetails: { specialOfferData, specialOfferError },
  } = useSelector((state) => state);

  const percentages = specialOfferData?.map((cur) => extractPercentages(cur?.scheme_note)) || [];
  const userGender = getUserGender();

  const bothMessage = (
    <h3 className="regular-text text-xs leading-5 tracking-[-0.2px] md:text-sm">
      Congratulations! You’re getting an{" "}
      <span className="semi-bold-text text-[#21B546]">
        additional {percentages?.[0]}%
      </span>{" "}
      returns exclusively for women{" "}
      <span className="semi-bold-text text-[#21B546]">{percentages?.[1]}%</span>{" "}
      p.a for Senior Citizens
    </h3>
  );

  const forWomenMessage = (
    <h3 className="regular-text text-xs leading-5 tracking-[-0.2px] md:text-sm">
      Congratulations! You’re getting an{" "}
      <span className="semi-bold-text text-[#21B546]">
        additional {percentages?.[0]}%
      </span>{" "}
      returns exclusively for women
    </h3>
  );

  const forSeniorMessage = (
    <h3 className="regular-text text-xs leading-5 tracking-[-0.2px] md:text-sm">
      Congratulations! You’re getting an{" "}
      <span className="semi-bold-text text-[#21B546]">
        additional {percentages?.[0]}%
      </span>{" "}
      returns exclusively for Senior Citizens
    </h3>
  );

  let message;
  if (!specialOfferError) {
    if (userGender === "female" && isSeniorCitizen && alertData?.issuer_name === "Shriram Capital Ltd") {
      message = bothMessage;
    } else if (alertData?.issuer_name === "Shriram Capital Ltd" && userGender === "female") {
      message = forWomenMessage;
    } else {
      message = forSeniorMessage;
    }
  }

  return (
    <>
      <div
        id="_alert dismissable"
        className="fixed left-0 right-0 top-0 z-10 flex min-h-[76px] items-center justify-center border border-[#D7DFE9] bg-[#fff] md:top-[4rem]"
      >
        <div
          id="_innerDiv"
          className="mx-auto flex w-[90%] max-w-[700px] flex-col items-center gap-2 py-2 text-center sm:flex-row md:w-[75%] md:gap-3"
        >
          <img
            src="/images/confetti.gif"
            alt="confetti"
            className="max-h-8 max-w-8 md:-mt-3"
          />
          {!specialOfferError && message}
          <div id="_right" className="flex items-center gap-2 sm:gap-5">
            <CrossIcon
              onClick={() => {
                setShowAlert(false);
              }}
            />
          </div>
        </div>
      </div>
      <div className="min-h-[128px] md:min-h-[4.5625rem]"></div>
    </>
  );
};

export default FdAlertBox;
