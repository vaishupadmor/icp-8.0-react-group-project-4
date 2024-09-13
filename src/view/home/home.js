import React, { useState,useEffect } from 'react'
import "./home.css"
import Homecard from '../../component/homecards/homecard'
import { ESPORTS_TEAM ,TAG_LINE,THEME,MAIN_TITLE,TAG_LINE2, } from '../../component/config/data'
import Footer from "./../..//component/footer/footer"
import TopTournament from '../../component/top-tournament/toptournament'
import { TOURNAMENTS } from '../../component/config/data1'
import { Link } from 'react-router-dom'
import ImageSlider from '../../component/imgslider/imgslider'
import VideoPlayer from '../../component/youtubevideo/VideoPlayer'
import Logo from "./logo.png"

const images = [
  'https://firstsportz.com/wp-content/uploads/2021/07/8-1024x576.jpg',
  'https://staticg.sportskeeda.com/editor/2022/03/c939e-16468047022474-1920.jpg',
  
  'https://c4.wallpaperflare.com/wallpaper/557/189/265/call-of-duty-warzone-xbox-one-call-of-duty-black-ops-hd-wallpaper-preview.jpg',
  'https://images.hindustantimes.com/tech/img/2021/11/27/960x540/PUBG-team3-1399x768_1623925660311_1638007175700.jpg',
  'https://i.pinimg.com/originals/07/56/30/0756304ee12cfbcd68ca5462766ad3c5.jpg',
  'https://i.ytimg.com/vi/NP0-REV1-20/maxresdefault_live.jpg',
  'https://images2.alphacoders.com/990/990967.jpg',
  'https://images2.alphacoders.com/990/990967.jpg',
  
];


function Home() {
  const videoIds = ['sonnlWyY9hM', '_TNRllxEcsM', 'A5bLICz3yQY'];
  
return (<>


<div className='main-background'>


<img src={Logo} style={{height:60, width:60 ,border:1 ,}} /><h1 className='home-heading' style={{color:THEME.highlight , marginLeft:60}}>  {MAIN_TITLE}</h1>

<div className='paragraph-container'>
  <p className='home-paragraph'> {TAG_LINE}</p>
  <p className='home-paragraph2'> {TAG_LINE2}</p>
  <Link to={learnmore}><button  type='button'  className='homepage-btn'> Learn more</button></Link>
 </div>
 </div>

<div className='tournament-maincard-container'>
  <div className='space'></div>
<div className="App">
      <ImageSlider images={images} />
</div>
<h1 className='tournament-main-title'> Tournaments</h1>
<div className='esport-card-container'>
 
  {TOURNAMENTS.map ((tournament,i)=>{
    return(<TopTournament
    key={i}
    imgUrl={tournament.imgUrl}
    title={tournament.title}
    />
     )
  })
  }
  
</div>
<hr></hr>
<h1 className='tournament-main-title2'> Teams</h1>
<div className='esport-card-container' >
    { ESPORTS_TEAM.map((Esports,i)=>{

 return (<Homecard
   key={i}
    imgUrl={Esports.imgUrl}
     title={Esports.title}
     description={Esports.description}
    
 />)
})
}
</div>
<h1 className='tournament-main-title2'> youtube videos</h1>
<div className='esport-card-container'>
      {videoIds.map((id) => (
        <VideoPlayer key={id} videoId={id} />
      ))}
    </div>
</div>



<div> 
<Footer/>
  </div></>
)}

export default Home