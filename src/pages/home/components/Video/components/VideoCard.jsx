
// import React from "react";
// import VideoPlayer from "./ReactPlayer";

// const VideoCard = () => {
//   return (
//     <div className="min-w-[272px] min-h-[215px] bg-[#FFF9DF] rounded-xl flex flex-col justify-between gap-[6px]">
//       <div className="min-h-[170px] bg-gray-300 rounded-xl">
//  <VideoPlayer/>
//       </div>
//       <h3 className="text-[12px] font-medium tracking-[-0.2] leading-5 text-[#1B1B1B] pl-2">
//         Rates of FD currently are all-time high
//       </h3>
//       <p className="text-[12px] font-normal text-[#5E718D] tracking-[-0.2] leading-5 pl-2">
//         1 min 30 secs
//       </p>
//     </div>
//   );
// };

// export default VideoCard;

import React from "react";

const VideoCard = () => {
  return (
    <div className="min-w-[272px] min-h-[215px] bg-[#FFF9DF] rounded-xl flex flex-col justify-between gap-[6px]">
      <video className="min-h-[170px] bg-gray-300 rounded-xl"></video>
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