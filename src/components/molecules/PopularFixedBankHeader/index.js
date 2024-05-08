import React, { useEffect } from "react";
import Image from "../../atoms/Image";

const PopularFixedBankHeader = ({ currValues }) => {
  const logoUrl = currValues && currValues.logo_url;
  return (
    <div className="flex gap-2 md:gap-4">
      <Image
        src={logoUrl}
        alt="target icon"
        className="h-[24px]
          w-[24px] md:h-10 md:w-10"
      />
      <span className="bold-text text-base leading-7 tracking-[-0.3] md:text-xl md:leading-8">
        {currValues && currValues.fd_name}
      </span>
    </div>
  );
};

export default PopularFixedBankHeader;
