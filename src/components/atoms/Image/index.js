import React from "react";

const Image = (props) => {
  return <img {...props} />;
};
export default React.memo(Image);
