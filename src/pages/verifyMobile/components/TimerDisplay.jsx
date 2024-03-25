// TimerDisplay.js
import React from "react";

const TimerDisplay = ({ time }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <p className="font-normal tracking-[-0.3]">
      Resend in <span className="font-bold">{formatTime(time)}</span>
    </p>
  );
};

export default TimerDisplay;
