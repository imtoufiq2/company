import React from "react";

const EditIcon = ({ onClick }) => {
  return (
    <img
      src="/images/pencil-Button.svg"
      alt="edit icon"
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default EditIcon;
