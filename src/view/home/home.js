import React from 'react'
import "./home.css"
import Homecard from '../../component/homecards/homecard'

function home() {
  return (
    <div>
    <div>
        <h1 className='home-heading'> Esports</h1>
        <p className='home-paragraph'> Experience the Adrenaline Rush of Esports.</p>
    </div>

    <div>
    <Homecard/>
    <Homecard/>

    </div>
    </div>
  )
}

export default home