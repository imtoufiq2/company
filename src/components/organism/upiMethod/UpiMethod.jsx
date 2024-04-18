import React from "react";

const UpiMethod = ({ upiInfo }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div id="image" className="h-[34px] w-[34px] ">
        <img src={upiInfo?.img} alt={upiInfo?.titile} />
      </div>
      <p className="text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]">
        {upiInfo?.titile}
      </p>
    </div>
  );
};

export default UpiMethod;
