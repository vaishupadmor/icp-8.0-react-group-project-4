import React from 'react'
import "./TopTournament.css"

function TopTournament({imgUrl,title,}) {
  return (<>
    
    <div className='tournament-container'>
      
      <img src={imgUrl} alt='tournament' className='tournament-img'/>
      <div className='tournament-heading'>
      <h1 className='tournament-title'>  {title}</h1>
      </div>
    </div></>
  )
}

export default TopTournament