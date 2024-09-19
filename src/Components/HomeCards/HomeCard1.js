import React from 'react'
import "./HomeCard1.css"
import { Link } from 'react-router-dom'

function Homecard({imgUrl,title,description,FollowUs}) {
  return (
    
       <div className="esport-card">
        <img
        src={imgUrl}
        className='esport-card-img'
        alt='teams'/>
       
        <div className='esport-card-description'>
        <h1 className='esport-card-name'> {title}</h1>
        <p > {description}</p>
       <Link to={`/${id}`}>  <button className='esport-card-button'> {FollowUs}</button></Link>
        </div>
        
    </div>
    
  )
}


export default Homecard