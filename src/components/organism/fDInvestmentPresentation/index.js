import React, { useMemo, useState } from "react";
import MediaPresentationCard from "../mediaPresentationCard";
import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import ReactPlayer from "react-player";

const FDInvestmentPresentation = () => {
  const videoCards = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => index + 1);
  }, []);
  const media = [
    {
      type: "htmlVideo",
      videoSrc:
        "https://www.youtube.com/watch?v=C5SOyd2BznE",
      thumbnail: "https://img.youtube.com/vi/C5SOyd2BznE/hqdefault.jpg",
      alt: "Poster for the Big Buck Bunny film, featuring the bunny character in a green field, along with a purple butterfly",
    },
   
    {
      type: "htmlVideo",
      videoSrc:
        "https://www.youtube.com/watch?v=C5SOyd2BznE",
      thumbnail: "https://img.youtube.com/vi/C5SOyd2BznE/hqdefault.jpg",
      alt: "Poster for the Big Buck Bunny film, featuring the bunny character in a green field, along with a purple butterfly",
    },
    {
      type: "htmlVideo",
      videoSrc:
        "https://www.youtube.com/watch?v=C5SOyd2BznE",
      thumbnail: "https://img.youtube.com/vi/C5SOyd2BznE/hqdefault.jpg",
      alt: "Poster for the Big Buck Bunny film, featuring the bunny character in a green field, along with a purple butterfly",
    },
  ];
  const url =
  "https://www.youtube.com/watch?v=C5SOyd2BznE";
const thumbnailUrl =
  "https://img.youtube.com/vi/C5SOyd2BznE/hqdefault.jpg";
  return (
    <div className="mx-auto  flex w-[90%] max-w-[1008px] flex-col gap-5 md:gap-10 md:w-[75%]">
      <div id="topContent">
       
        <h2 className="bold-text text-xl  leading-8 tracking-[-0.3] text-[#1B1B1B]  md:hidden max-h-[64px]" >
          Learn why this is the{" "}
          <span className="text-[#21B546]">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>

        <h2 className=" medium-text   text-[#1B1B1B] md:text-4xl  md:leading-[44px]  md:tracking-[-0.1] hidden md:block" >
          Learn why this is the{" "}
          <span className="text-[#21B546] bold-text">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="example flex w-full gap-3  overflow-x-scroll sm:gap-6 md:gap-12"
      >
        {media?.map((videoData) => {
          // return <MediaPresentationCard key={videoData} />;
          return (
            <div className="flex gap-[9px] w-full min-w-[272px] flex-col justify-between  rounded-xl">
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
              url={url}
              playing={true}
              muted={true}
              width="100%"
              height="100%"
              controls={true}
              light={thumbnailUrl}
            />
          </div>
            </div>
      
          <div className="flex flex-col gap-1">
          <Heading
              text="Rates of FD currently are all-time high"
              type="h3"
              className="medium-text pl-2 text-xs md:text-sm  leading-4 tracking-[-0.2] text-[#1B1B1B] sm:leading-5 sm:tracking-[-0.2] md:leading-6 md:tracking-[-0.2] "
            />
      
            <TextDisplay
              id="bottom"
              text="1 min 30 secs"
              elementType="p"
              className="regular-text pl-2 text-xs leading-4 tracking-[-0.2] text-[#5E718D] "
            />
          </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default FDInvestmentPresentation;
