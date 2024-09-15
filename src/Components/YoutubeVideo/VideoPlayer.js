import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '250',
    width: '350',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
