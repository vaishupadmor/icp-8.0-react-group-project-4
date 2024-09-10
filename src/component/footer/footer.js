import React from 'react'
import "./footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-main-container'>
        <div className='footer-main-1'>
         <h3 className='footer-head'> built for Gamers</h3>

         <span ><a href='' className='footer-links'>Esports</a></span>
         <span><a href='' className='footer-links'>Try playing </a></span>
         <span><a href=''  className='footer-links'>tournaments</a> </span>
        
        </div>
        <div className='footer-main-1'>
          <h3 className='footer-head'> About us</h3>
          <span> <a> contact us </a></span>
          <span> <a> follow us</a></span>
          <span> <a> Get in touch</a></span>
        </div>
        <div className='footer-main-1'>
          <h3 className='footer-head'> Social</h3>
          <span> <a> instagram</a></span>
          <span> <a> facebook</a></span>
          <span> <a> twitter</a></span>
        </div>
        </div>
        <hr></hr>
        <div className='footer-sub-container'>

        </div>
    </div>
  )
}

export default Footer