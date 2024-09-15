import React from 'react'
import "./../pages.css"
function GamingHome({imgUrl,name}) {
  return (
  
    <div className='teamcard'>
        <img className='team-image'
        src={imgUrl}/>
    <h1 className='team-name'>
        {name}
    </h1>
    </div>
  )
}

export default GamingHome
