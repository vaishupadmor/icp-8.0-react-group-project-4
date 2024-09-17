import React from 'react'
import "./footer.css"
import Insta from "./insta-logo.jpg"
import FB from "./facebook-logo.jpg"
import YT from "./youtube.png"
import LG from  "./logo.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-main-container'>

        <div className='footer-main'>
          <img src={LG} style={{height:30,width:30,marginLeft:30}}/>
         <h3 className='footer-head-para'>Esports</h3>
         <p className='footer-para'> Esports is competitive level gaming. It's teams of 
            people playing games against 
            each other at a professional level, regularly winning 
            huge sums of money as prizes </p>
        </div>
        <div className='footer-main-1'>
         <h3 className='footer-head'> built for Gamers</h3>

         <span ><a href='https://esportsfederation.in/' className='footer-links'>Esports</a></span>
         <span><a href='https://www.pcmag.com/picks/best-esports-games' className='footer-links'>Try playing </a></span>
         <span><a href='tournament'  className='footer-links'>Tournaments</a> </span>
        
        </div>
        <div className='footer-main-1'>
          <h3 className='footer-head'> Quick Links</h3>
          <span> <a href='./Views/Contact/Contact.js' className='footer-links'> contact us </a></span>
          <span> <a href='' className='footer-links'> follow us</a></span>
          <span> <a href='./Views/About/About.js' className='footer-links'> About us</a></span>
        </div>
        <div className='footer-main-1'>
          <h3 className='footer-head'> connect with us</h3>
          <span><a href='' className='footer-links'> <img src={Insta} alt='instagram'  className='social-media'/> </a></span>
          <span> <a href='' className='footer-links'> <img src={FB} alt='facebook'  className='social-media'/> </a></span>
          <span> <a href='https://www.youtube.com/channel/UCZsozXCEvusHs4UX5wcSA_g' className='footer-links'><img src={YT} alt='youtube'  className='social-media'/> </a></span>
        </div>
        </div>
        <hr></hr>
        <div className='footer-sub-container'>
           @2024 All rights reserved
        </div>
    </div>
  )
}

export default Footer