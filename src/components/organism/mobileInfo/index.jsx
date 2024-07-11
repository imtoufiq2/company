const MobileInfo = ({ mobileNumber }) => {
  return (
    <div className="tracking-[-0.3px] text-[#1B1B1B]">
      <p className="regular-text  text-base  leading-7 tracking-[-0.3px]">
        Please enter the OTP sent on
      </p>
      <h4 className="bold-text md:semi-bold-text  text-base leading-7  tracking-[-0.3px] md:text-xl md:leading-8 ">
        {mobileNumber.replace(/(\d{5})/g, "$1 ").trim()}
      </h4>
    </div>
  );
};

export default MobileInfo;
