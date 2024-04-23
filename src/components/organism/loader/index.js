import React from "react";
import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="m-auto flex h-full items-center justify-center">
      <RotatingLines
        visible={true}
        height="35"
        width="35"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
