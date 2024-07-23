import React, { useMemo, useState } from "react";
import MediaPresentationCard from "../mediaPresentationCard";
import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import ReactPlayer from "react-player";

const FDInvestmentPresentation = () => {
  const videoData = [
    // 1 min 30 secs
    {
      url: `https://www.youtube.com/watch?v=OtRzoX1Wl_E&feature=youtu.be`,
      thumbnailUrl: "https://img.youtube.com/vi/OtRzoX1Wl_E/hqdefault.jpg",
       duration:"2 min 14 secs"
    },
    {
      url: `https://www.youtube.com/watch?v=kz3Ce2KhnMU`,
      thumbnailUrl: "https://img.youtube.com/vi/kz3Ce2KhnMU/hqdefault.jpg",
      duration:"1 min 43 secs"
    },
    {
      url: `https://www.youtube.com/watch?v=IMhVg_cG0YQ&feature=youtu.be`,
      thumbnailUrl: "https://img.youtube.com/vi/IMhVg_cG0YQ/hqdefault.jpg",
      duration:"1 min 29 secs"
    },
  ];
  return (
    <div className="mx-auto  flex w-[90%] max-w-[1008px] flex-col gap-5 md:w-[75%] md:gap-10">
      <div id="topContent">
        <h2 className="bold-text max-h-[64px]  text-xl leading-8 tracking-[-0.3px]  text-[#1B1B1B] md:hidden">
          Learn why this is the{" "}
          <span className="text-[#21B546]">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>

        <h2 className=" medium-text   hidden text-[#1B1B1B]  md:block  md:text-4xl md:leading-[44px] md:tracking-[-0.1px]">
          Learn why this is the{" "}
          <span className="bold-text text-[#21B546]">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="example flex w-full gap-3  overflow-x-scroll sm:gap-6 md:gap-12"
      >
        {videoData?.map((video) => {
          // return <MediaPresentationCard key={videoData} />;
          return (
            <div className="flex w-full min-w-[272px] flex-col justify-between gap-[9px]  rounded-xl">
              <div className="min-h-[170px] rounded-xl bg-gray-300">
                {/* <VideoPlayerWithControls /> */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <ReactPlayer
                    url={video?.url}
                    playing={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    controls={true}
                    light={video?.thumbnailUrl}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Heading
                  text="Rates of FD currently are all-time high"
                  type="h3"
                  className="medium-text pl-2 text-xs leading-4  tracking-[-0.2px] text-[#1B1B1B] sm:leading-5 sm:tracking-[-0.2px] md:text-sm md:leading-6 md:tracking-[-0.2px] "
                />

                <TextDisplay
                  id="bottom"
                  text={video?.duration}
                  elementType="p"
                  className="regular-text pl-2 text-xs leading-4 tracking-[-0.2px] text-[#5E718D] "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FDInvestmentPresentation;
