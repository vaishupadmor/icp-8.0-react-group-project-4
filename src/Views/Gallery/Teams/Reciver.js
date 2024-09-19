import React from 'react'

function BadmintonHome({imgUrl,name}) {
  return (
  <div className='teamcard'>
    <div >
        <img className='team-image'
        src={imgUrl}/>
    <h1 className='team-name'>
        {name}
    </h1>
    </div>
    </div>
  )
}

export default BadmintonHome
