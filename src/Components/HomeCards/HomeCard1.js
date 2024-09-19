import React from 'react'
import "./HomeCard1.css"

function Homecard({imgUrl,title,description}) {
  return (
    
       <div className="esport-card">
        <img
        src={imgUrl}
        className='esport-card-img'
        alt='teams'/>
       
        <div className='esport-card-description'>
        <h1 className='esport-card-name'> {title}</h1>
        <p > {description}</p>
        <button className='esport-card-button'> follow us</button>
        </div>
        
    </div>
    
  )
}


export default Homecard