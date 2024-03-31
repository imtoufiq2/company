import React from "react";

const Avatar = () => {
  const imageSrc =
    "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg";
  return (
    <div className="flex -space-x-2 rtl:space-x-reverse">
      {Array.from({ length: 5 }).map((curItem, index) => {
        return (
          <img
            key={index}
            className="w-6 h-6 md:w-[30px] md:h-[30px] border-2 border-white rounded-full dark:border-[#fff] object-cover"
            src={imageSrc}
            alt=""
          />
        );
      })}

      <a
        className="flex items-center justify-center w-6 h-6 text-xs tracking-[-0.2] text-center text-[#444D61] font-semibold bg-[#F0F7F2] border-2 border-white rounded-full hover:bg-gray-100 dark:border-[#fff] text-[8px] md:w-[30px] md:h-[30px]"
        href="/"
      >
        12k+
      </a>
    </div>
  );
};

export default Avatar;
