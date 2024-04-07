import React from "react";
import VideoPlayerWithControls from "./ReactPlayer";
const VideoCard = () => {
  return (
    // w-full min-h-[215px] bg-[#FFF9DF] rounded-xl flex flex-col justify-between gap-[6px]
    <div className="min-w-[272px] w-full min-h-[215px] rounded-xl flex flex-col justify-between gap-[6px]">
      <div className="min-h-[170px] bg-gray-300 rounded-xl">
        <VideoPlayerWithControls />
      </div>
      <h3 className="text-[12px] font-medium tracking-[-0.2] leading-5 text-[#1B1B1B] pl-2">
        Rates of FD currently are all-time high
      </h3>
      <p className="text-[12px] font-normal text-[#5E718D] tracking-[-0.2] leading-5 pl-2">
        1 min 30 secs
      </p>
    </div>
  );
};

export default VideoCard;
