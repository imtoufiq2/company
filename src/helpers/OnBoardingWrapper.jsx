import React from "react";

const LoginFormWrapper = ({ children, onSubmit }) => {
  return (
    <div className="flex m-auto border-2 w-full md:max-w-[592px] justify-center mt-[72px] rounded-md md:rounded-2xl bg-white ">
      <form
        className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85] md:scale-100 px-0 md:px-[72px] "
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default LoginFormWrapper;
