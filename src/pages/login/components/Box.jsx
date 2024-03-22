import React from "react";

import Header from "./Header";
import LoginInput from "./LoginInput";
import Button from "../../../components/Button";

const Box = () => {
  return (
    <div className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85]  md:scale-100">
      <Header />
      <LoginInput />
      <div
        id="content"
        className="font-normal text-sm leading-6 tracking-[-0.2]"
      >
        By continuing, you agree to our{" "}
        <span className="text-custom-green">Terms of Service</span> <br /> and{" "}
        <span className="text-custom-green">Privacy Policy</span>.
      </div>
      <Button bg="#000" />
    </div>
  );
};

export default Box;
