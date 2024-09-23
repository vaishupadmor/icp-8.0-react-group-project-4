import React from 'react';
import YouTube from 'react-youtube';
import './Videoplayer.css'; 

const VideoPlayer = ({ videoId }) => {
  
  const opts = {
    
    playerVars: {
      autoplay: 1,
      mute:1,
    },
  };
  
  return (
    <div className="video-player-container">
      <YouTube videoId={videoId} opts={opts} className='youtube'/>
    </div>
  );
};

export default VideoPlayer;