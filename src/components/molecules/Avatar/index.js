import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Image from "../../atoms/Image";
import ProgressBarWrapper from "../../organism/progressBarWrapper";
import { useNavigate } from "react-router-dom";

const Avatar = ({ className, profileCompleted, imgUrl ,onClick }) => {

  return (
    <ProgressBarWrapper label="Arbitrary content" className={className}    >
      <CircularProgressbarWithChildren
        value={profileCompleted}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#21B546",
        })}
      >
        <Image
        onClick={onClick || undefined}
          style={{
            width: "82%",
            height: "82%",
            borderRadius: "100%",
            objectFit: "fill",
            padding: imgUrl? "0px": "4px"
          }}
          src={
            imgUrl
              ? `data:image/png;base64,${imgUrl}`
              : "/images/usericon.svg"
          }
          alt="profiles"
       
        />
      </CircularProgressbarWithChildren>
    </ProgressBarWrapper>
  );
};

export default Avatar;
