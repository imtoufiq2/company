import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-0 ">
      <h2 className="font-bold text-[32px] text-custom-green tracking-[-0.5] ">
        Welcome back,
      </h2>
      <h4 className="text-[18px] leading-8 text-custom-text-gray tracking-[-0.3] font-semibold">
        Start your journey with a secure login
      </h4>
    </div>
  );
};

export default Header;
