import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-0 ">
      <h2 className="text-[32px] font-bold tracking-[-0.5] text-custom-green ">
        Welcome back,
      </h2>
      <h4 className="text-[18px] font-semibold leading-8 tracking-[-0.3] text-custom-text-gray">
        Start your journey with a secure login
      </h4>
    </div>
  );
};

export default Header;
