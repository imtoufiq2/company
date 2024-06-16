import React from "react";
import Heading from "../../atoms/headingContent/Heading";

const LoginBoxHeader = () => {
  //  const data= makeGlobalPayment()
  //  console.log("globalrepsoen", data)
  return (
    <div className="flex flex-col gap-2 md:gap-[6px] ">
      <Heading
        text="Welcome,"
        type="h2"
        className="bold-text text-2xl leading-7 tracking-[-0.5] text-[#21B546] md:text-[2rem] md:leading-10"
      />

      <Heading
        text="Start your journey with a secure login"
        type="h4"
        className="medium-text text-base leading-5 text-[#1B1B1B] sm:leading-7 sm:tracking-[-0.3]  md:text-xl md:leading-8 md:text-[#4F5662]"
      />
    </div>
  );
};

export default LoginBoxHeader;
