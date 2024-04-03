import React from "react";

const UpiMethod = ({ upiInfo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div id="image" className="w-[34px] h-[34px] ">
        <img src={upiInfo?.img} alt={upiInfo?.titile} />
      </div>
      <p className="font-normal text-[12px] text-[#5E718D] leading-5 tracking-[-0.2]">
        {upiInfo?.titile}
      </p>
    </div>
  );
};

export default UpiMethod;