import React from "react";

const Image = (props) => {
  console.log("props", props)
  return <img {...props} />;
};
export default React.memo(Image);
