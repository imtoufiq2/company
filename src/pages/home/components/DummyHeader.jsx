import React, { useState } from "react";

const Header = () => {
  const navData = ["Dashboard", "Invest", "Portfolio", "Refer & Earn"];
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="my-4  w-[90%] md:w-[75%] mx-auto flex  gap-4 max-w-[1008px] border ">
      <div className="my-auto border-rose-500 border hidden md:block">
        <div id="left" className="max-w-fit  flex gap-20 items-center ">
          <img src="/images/homeAltcaseLogo.svg" alt="altcase logo" />
          <ul className="flex font-semibold text-[16px] leading-7 tracking-[-0.3] gap-10 items-center">
            {navData.map((data, index) => {
              return (
                <li
                  className={`cursor-pointer ${
                    active === data && "text-[#21B546]"
                  }`}
                  key={index}
                  onClick={() => setActive(data)}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button
        id="right"
        className="rounded-md font-semibold border px-5 py-[10px] my-auto text-[#55D976] bg-white border-rose-500 "
      >
        Login
      </button>
      <button
        id="right"
        className="rounded-md font-semibold border px-5 py-[10px] my-auto text-[#55D976] bg-white border-rose-500 "
      >
        000
      </button>
    </div>
  );
};

export default Header;
