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
      <div
        id="image"
        className="flex min-h-[2.125rem] min-w-[2.125rem] items-center justify-center p-1"
      >
        <img
          style={{ cursor: "pointer" }}
          className="block min-h-[32px] min-w-[32px]"
          src={upiInfo?.img}
          alt={upiInfo?.title}
          onClick={HandleVendorClick}
        />
      </div>
      <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
        {upiInfo?.title}
      </p>
    </div>
  );
};

export default UpiMethod;
