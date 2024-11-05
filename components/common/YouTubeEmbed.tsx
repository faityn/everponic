import React from "react";

type YouTubeEmbedProps = {
  videoId: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="w-full h-full ">
      <iframe
        className="w-full md:h-[845px] max-md:h-[545px] rounded-md object-cover object-center"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&controls=0&autoplay=1&mute=1&playlist=${videoId}&loop=1&vq=hd720`}
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
