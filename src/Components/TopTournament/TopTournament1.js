import React from 'react'
import "./TopTournament1.css"

function TopTournament({imgUrl,title,}) {
  return (<>
    
    <div className='top-tournament-container'>
      
      <img src={imgUrl} alt='tournament' className='top-tournament-img'/>
      <div className='top-tournament-heading'>
      <h1 className='top-tournament-title'>  {title}</h1>
      </div>
    </div></>
  )
}

export default TopTournament