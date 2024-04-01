import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayerWithControls = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <ReactPlayer
        className="react-player"
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        playing={playing}
        width="100%"
        height="100%"
        controls={false}
      />
      <div className="play-pause-button" onClick={handlePlayPause}>
        {playing ? "Pause" : "Play"}
      </div>
    </>
  );
};

export default VideoPlayerWithControls;
