import React from 'react'
import "../pages.css"
function teamsHome({imgUrl,name}) {
  return (
    <div className='teamhome'>
    <div className='teamcard'>
        <img className='team-image'
        src={imgUrl}/>
    <h1 className='team-name'>
        {name}
    </h1>
    </div>
    </div>
  )
}

export default teamsHome
