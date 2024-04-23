const MobileInfo = ({ mobileNumber }) => {
  return (
    <div className="tracking-[-0.3] text-[#1B1B1B]">
      <p className="text-base font-normal leading-7">
        Please enter the OTP sent on
      </p>
      <h4 className="text-[19px] font-semibold leading-8">
        {mobileNumber.replace(/(\d{5})/g, "$1 ").trim()}
      </h4>
    </div>
  );
};

export default MobileInfo;
