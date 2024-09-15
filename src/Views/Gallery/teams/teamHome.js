import React from 'react'
import "../pages.css"
function teamsHome({imgUrl,name,desc}) {
  return (
  
    <div className='teamcard'>
        <img className='team-image'
        src={imgUrl}/>
    <h1 className='team-name'>
        {name}
    </h1>
    <p>{desc}</p>
    </div>
  )
}

export default teamsHome
