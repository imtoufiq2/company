import React from "react";

const ProgressBarWrapper = (props) => {
  return <div className={props?.className} >{props.children}</div>;
};

export default ProgressBarWrapper;
