import React from "react";
import Heading from "../../atoms/headingContent/Heading";

const LoginBoxHeader = () => {
  return (
    <div className="flex flex-col gap-0 ">
      <Heading
        text="Welcome back,"
        type="h2"
        className="bold-text  text-[32px] tracking-[-0.5] text-custom-green "
      />
      <Heading
        text="Start your journey with a secure login"
        type="h4"
        className="semi-bold-text  text-[18px] leading-8 tracking-[-0.3] text-custom-text-gray"
      />
    </div>
  );
};

export default LoginBoxHeader;
