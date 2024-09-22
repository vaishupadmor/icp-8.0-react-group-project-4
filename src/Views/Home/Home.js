import React, { useState,useEffect } from 'react'
import "./Home.css"
import Homecard from '../../Components/HomeCards/HomeCard1'
import { ESPORTS_TEAM ,TAG_LINE,THEME,MAIN_TITLE,TAG_LINE2,BUTTON } from '../../Config/Data'
import Footer from "../../Components/Footer/Footer1"
import TopTournament from '../../Components/TopTournament/TopTournament1'
import { TOURNAMENTS } from '../../Config/Data1'
import { Link } from 'react-router-dom'
import ImageSlider from '../../Components/ImgSlider/ImgSlider1'
import VideoPlayer from '../../Components/YoutubeVideo/VideoPlayer'
import style from './style.module.css'
import { useSpring, a ,animated} from '@react-spring/web'
import Navbar from "./../../Components/Navbar1/Navbar"





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
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 4, transform: 'translateY(0)' },
    config: { duration: 500 }
  });


return (<>

<Navbar/>
<div className='main-background'>

<div className={style.container} onClick={() => set(state => !state)}>

      <a.div
        className={`${style.c} ${style.back}`}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      />
      
      <a.div
        className={`${style.c} ${style.front}`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      /> 
    </div>
    



<animated.div style={animationProps} className='paragraph-container'>
          <p className='home-paragraph'>{TAG_LINE}</p>
          <p className='home-paragraph2'>{TAG_LINE2}</p>
          <Link to={"/learnmore"}>
            <button type='button' className='homepage-btn' style={{ backgroundColor:BUTTON.backgroundColor , color:BUTTON.fontColor}}>Learn more</button>
          </Link>
 </animated.div>
     

 </div>

<div className='tournament-maincard-container' style={{backgroundColor:THEME.main}}>
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
<h1 className='tournament-main-title2' style={{color:THEME.primary}}> Teams</h1>
<div className='esport-card-container' >
    { ESPORTS_TEAM.map((Esports,i)=>{

 return (<Homecard
   key={i}
    imgUrl={Esports.imgUrl}
     title={Esports.title}
     description={Esports.description}
     followLinks={Esports.followLinks}

 />)
})
}
</div>
<h1 className='tournament-main-title2'> youtube videos</h1>
<div className='esport-card-container-youtube'>
      {videoIds.map((id) => (
        <VideoPlayer key={id} videoId={id} className='youtube'/>
      ))}
    </div>
</div>



<div> 
<Footer/>
  </div></>
)}

export default Home