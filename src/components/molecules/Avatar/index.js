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
          "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        }
        alt="avatar with progress bar"
      />
    </CircularProgressbarWithChildren>
  </ProgressBarWrapper>
  )
}

export default Avatar
