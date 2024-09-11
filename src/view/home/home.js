import React from 'react'
import "./home.css"
import Homecard from '../../component/homecards/homecard'
import { ESPORTS_TEAM ,TAG_LINE,THEME,MAIN_TITLE,TAG_LINE2, } from '../../component/config/data'
import Footer from "./../..//component/footer/footer"
import TopTournament from '../../component/top-tournament/toptournament'
import { TOURNAMENTS } from '../../component/config/data1'
import { YOUTUBE_VIDEO } from '../../component/config/data3'
import YouTube from '../../component/youtubevideo/youtube'
import Logo from "./logo.png"

function Home() {
  return (<>
<div className='main-background'>

<img src={Logo} style={{height:50, width:50 ,border:1 ,}} /><h1 className='home-heading' style={{color:THEME.highlight , marginLeft:60}}>  {MAIN_TITLE}</h1>

<div className='paragraph-container'>
  <p className='home-paragraph'> {TAG_LINE}</p>
  <p className='home-paragraph2'> {TAG_LINE2}</p>
  <button  type='button'  className='homepage-btn'> Learn more</button>
 </div>
    
</div>
<div className='tournament-maincard-container'>
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
<h1 className='tournament-main-title2'> Teams</h1>
<div className='esport-card-container' >
    { YOUTUBE_VIDEO.map((video,i)=>{

 return (<YouTube
   key={i}
    imgUrl={video.videolink}
     title={video.title}
   
    
 />)
})
}
</div>
</div>



<div> 
<Footer/>
  </div></>
)}

export default Home