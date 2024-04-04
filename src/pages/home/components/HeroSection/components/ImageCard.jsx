import React from "react";

const ImageCard = ({data}) => {
  return (
    // lg:min-w-[152px]
    <div className="min-w-[92px] lg:min-w-fit  min-h-[112px] lg:min-h-[124px]  flex-1 ">
      <img
        src={data?.img}
        alt={data?.title}
        className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] m-auto"
      />
      <p className="font-medium text-[12px] md:text-sm leading-5 md:leading-6 tracking-[-0.2] text-center ">
      {data?.title}
      </p>
    </div>
  );
};

export default ImageCard;
