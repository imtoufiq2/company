import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import VideoPlayerWithControls from "../../molecules/videoPlayerWithControls";
import ReactPlayer from "react-player";
const MediaPresentationCard = () => {
  const url =
  "https://www.youtube.com/watch?v=C5SOyd2BznE";
const thumbnailUrl =
  "https://img.youtube.com/vi/C5SOyd2BznE/hqdefault.jpg";
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
  );
};

export default MediaPresentationCard;
