import React from "react";
import ReactPlayer from "react-player";
import "tailwindcss/tailwind.css";

type YouTubePlayerProps = {
  videoUrl: string;
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoUrl }) => {
  return (
    <div className="w-full aspect-video">
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </div>
  );
};

export default YouTubePlayer;
