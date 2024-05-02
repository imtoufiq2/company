import React from "react";
import Image from "../../atoms/Image";

const PopularFixedBankHeader = () => {
  return (
    <div className="flex gap-2 md:gap-4">
      <Image
          src="/images/Shriram-finance-icon.svg"
          alt="target icon"
          className="h-[24px]
          w-[24px] md:h-10 md:w-10
          
          "
        />
      <span className="bold-text text-base leading-7 tracking-[-0.3] md:text-xl md:leading-8">Shriram Finance</span>

    </div>
  );
};

export default PopularFixedBankHeader;
