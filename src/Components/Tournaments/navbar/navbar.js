import React from 'react'
import './Navbar.css'
function navbar() {
  return (
    
       
       <div  className='navbar2'>
        <div>
            <div className='title'>Status</div>
            <a href="/ongoing" className="navbar2-link">ONGOING</a>
            <a href="/upcoming" className="navbar2-link">UPCOMING</a>
            <a href="/past" className="navbar2-link">PAST</a>
         </div>
</div>
    
  )
}

export default navbar
