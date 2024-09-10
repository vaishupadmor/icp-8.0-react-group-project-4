import React from 'react'
import "./home.css"
import Homecard from '../../component/homecards/homecard'
import { ESPORTS_TEAM ,TAG_LINE,THEME,MAIN_TITLE,TAG_LINE2 } from '../../component/config/data'
import Footer from "./../..//component/footer/footer"

function Home() {
  return (<>
<div className='main-background'>

<h1 className='home-heading' style={{color:THEME.highlight}}> {MAIN_TITLE}</h1>

<div className='paragraph-container'>
  <p className='home-paragraph'> {TAG_LINE}</p>
  <p className='home-paragraph2'> {TAG_LINE2}</p>
  <button  type='button'  className='homepage-btn'> Learn more</button>
 </div>
    
</div>

<div className='esport-card-container' style={{backgroundColor:"black"}}>
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

<div> 
<Footer/>
  </div></>
)}

export default Home