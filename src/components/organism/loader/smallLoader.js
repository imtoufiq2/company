import React from "react";
import { RotatingLines } from "react-loader-spinner";
const SmallLoader = () => {
  return (
    <div className="m-0 flex h-full items-center justify-center">
      <RotatingLines
        visible={true}
        height="16"
        width="16"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default SmallLoader;
