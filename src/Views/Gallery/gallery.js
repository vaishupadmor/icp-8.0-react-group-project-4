import React from 'react';
import "./gallery.css"
import Navbar from '../../Components/Navbar1/Navbar';
import Services from './Home/Services/Services';
import YouTube from 'react-youtube';
import VideoPlayer from '../../Components/YoutubeVideo/VideoPlayer';
import Footer from './../../Components/Footer/Footer1'
function Tournament() {
  const videoIds = ['sonnlWyY9hM', '6cfhJO5M0Xo', 'A5bLICz3yQY','ZVl32Sn2hUA'];

  return (

    <>
      <Navbar />
      <div className='galleryHome'>
        <Services />
        <div>
          <h1 className='youtube-title'> Wining Moment Videos</h1>
          <div className='esport-card-container-youtube'>
            {videoIds.map((id) => (
              <VideoPlayer key={id} videoId={id} className='youtube' />
            ))}
          </div>
        </div>
    <Footer/>
      </div>

    </>
  )
}

export default Tournament
