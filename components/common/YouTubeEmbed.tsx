import React from "react";

type YouTubeEmbedProps = {
  videoId: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="w-full h-full ">
      <iframe
        className="w-full md:h-[845px] max-md:h-[545px] rounded-md object-cover object-center"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
