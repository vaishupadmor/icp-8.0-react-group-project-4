import React from 'react'
import "./Abcard.css"

function Abcard({title,discription}) {
  return (
    <div>
        <div className="acard">

        
        <h1 className='cardtitle'>{title}</h1>
        <p>{discription}</p>
 
        </div>
    </div>
  )
}

export default Abcard