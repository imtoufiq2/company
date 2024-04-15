import React from "react";
import pencilButton from "../../../assets/images/pencil-Button.svg"
const EditIcon = ({ onClick }) => {
  return (
    <img
      src={pencilButton}
      alt="edit icon"
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default EditIcon;
