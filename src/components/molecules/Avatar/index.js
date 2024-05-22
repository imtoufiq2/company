import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Image from "../../atoms/Image";
import ProgressBarWrapper from "../../organism/progressBarWrapper";

const Avatar = ({ className, profileCompleted, imgUrl }) => {
  return (
    <ProgressBarWrapper label="Arbitrary content" className={className}>
      <CircularProgressbarWithChildren
        value={profileCompleted}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#21B546",
        })}
      >
        <Image
          style={{
            width: "82%",
            height: "82%",
            borderRadius: "100%",
            objectFit: "cover",
          }}
          src={
            imgUrl
              ? imgUrl
              : "https://w7.pngwing.com/pngs/328/599/png-transparent-male-avatar-user-profile-profile-heroes-necktie-recruiter.png"
          }
          alt="profile"
        />
      </CircularProgressbarWithChildren>
    </ProgressBarWrapper>
  );
};

export default Avatar;
