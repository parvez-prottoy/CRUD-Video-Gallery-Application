import React from "react";
import ReactPlayer from "react-player/lazy";

const Player = ({ link, title }) => {
  return (
    <ReactPlayer
      title={title}
      className="react-player aspect-video"
      url={link}
      width="100%"
      height="80%"
    />
  );
};

export default Player;
