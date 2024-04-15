import React from "react";
import apple from "../../../../../assets/images/apple.svg"
import googlePlaystore from "../../../../../assets/images/google-playstore.svg"
import qrcodeForAppInstall from "../../../../../assets/images/qrcode-for-app-install.svg"
const ScanCard = () => {
  return (
    <div
      className=" p-8 flex flex-col gap-8 rounded-2xl bg-[#15362B]/50 flex-1 justify-between bg-opacity-[5%]"
      style={{ background: "#214036" }}
    >
      <div id="top" className="flex items-center justify-between   gap-8">
        <div
          id="left"
          className="w-[100px]  h-[100px]   flex justify-center items-center"
        >
          <img
            src={qrcodeForAppInstall}
            alt="qrcode"
            className="w-full h-full "
          />
        </div>
        <div id="right" className="flex flex-col gap-2">
          <h3 className="font-bold text-[20px] leading-8 tracking-[-0.3] scale-[0.9] md:scale-100">
            Invest on the go with our mobile app
          </h3>
          <div className="flex gap-4 scale-[0.9] md:scale-100">
            <img src={apple} alt="apple store" className="" />
            <img src={googlePlaystore} alt="playstore" />
          </div>
        </div>
      </div>
      <div
        id="bottom"
        className="font-normal text-[16px] leading-7 tracking-[-0.3] opacity-70 text-start md:text-center"
      >
        Scan this QR code to download Altcase app
      </div>
    </div>
  );
};

export default ScanCard;
