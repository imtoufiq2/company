import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import VideoPlayerWithControls from "../../molecules/videoPlayerWithControls";

const MediaPresentationCard = () => {
  return (
    <div className="flex min-h-[215px] w-full min-w-[272px] flex-col justify-between gap-[6px] rounded-xl">
      <div className="min-h-[170px] rounded-xl bg-gray-300">
        <VideoPlayerWithControls />
      </div>

      <Heading
        text="Rates of FD currently are all-time high"
        type="h3"
        className="pl-2 text-[12px] font-medium leading-5 tracking-[-0.2] text-[#1B1B1B] sm:leading-5 sm:tracking-[-0.2]"
      />

      <TextDisplay
        id="bottom"
        text="1 min 30 secs"
        elementType="p"
        className="pl-2 text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]"
      />
    </div>
  );
};

export default MediaPresentationCard;
