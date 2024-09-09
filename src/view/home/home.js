import React from 'react'
import "./home.css"
import Homeimg from "./main-image.jpg"

function home() {
  return (
    <div>
        <h1 className='home-heading'> Esports</h1>
        
        <div>
            <img src={Homeimg} alt='Home' className='home-image'/>
            <p className='home-paragraph'> </p>
        </div>
    </div>
  )
}

export default home