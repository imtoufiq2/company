import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import Image from '../../atoms/Image'
import ProgressBarWrapper from '../../organism/progressBarWrapper'

const Avatar = () => {
  return (
    <ProgressBarWrapper label="Arbitrary content">
    <CircularProgressbarWithChildren
      value={60}
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
          "/images/profile-image.svg"
        }
        alt="avatar with progress bar"
      />
    </CircularProgressbarWithChildren>
  </ProgressBarWrapper>
  )
}

export default Avatar
