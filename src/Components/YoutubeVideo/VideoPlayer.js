import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css'; // Import the CSS file

const VideoPlayer = ({ videoId }) => {
  
  const opts = {
    height: '250',
    width: '350',
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div className="video-player-container">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;