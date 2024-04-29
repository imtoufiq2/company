import React from "react";

const UpiMethod = ({ upiInfo, paymentOptions }) => {
  const HandleVendorClick = () => {
    if (upiInfo.title === "Phonepe") {
      window.open(paymentOptions.values.PhonePay, "_blank");
    } else if (upiInfo.title === "Google Pay") {
      window.open(paymentOptions.values.GooglePay, "_blank");
    } else if (upiInfo.title === "Paytm") {
      window.open(paymentOptions.values.Paytm, "_blank");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div id="image" className="h-[34px] w-[34px] ">
        <img
          style={{ cursor: "pointer" }}
          src={upiInfo?.img}
          alt={upiInfo?.title}
          onClick={HandleVendorClick}
        />
      </div>
      <p className="regular-text text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]">
        {upiInfo?.title}
      </p>
    </div>
  );
};

export default UpiMethod;
