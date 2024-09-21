import React from 'react';
import "./gallery.css"
import Navbar from '../../Components/Navbar/Navbar';
import Services from './Home/Services/Services';
import YouTube from 'react-youtube';
import VideoPlayer from '../../Components/YoutubeVideo/VideoPlayer';
import Footer from './../../Components/Footer/Footer1'
function Tournament() {
  const videoIds = ['sonnlWyY9hM', '_TNRllxEcsM', 'A5bLICz3yQY'];

  return (

    <>
      <Navbar />
      <div className='galleryHome'>
        <Services />
        <div>
          <h1 className='tournament-main-title2'> youtube videos</h1>
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
