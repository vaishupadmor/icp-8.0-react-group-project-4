import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'; 
function navbar() {
  return (
    
       
       <div  className='navbar2'>
        <div>
            <div className='title'>Status</div>
            <Link to="/ongoing" className="navbar2-link">ONGOING</Link>
            <Link to="/upcoming" className="navbar2-link">UPCOMING</Link>
            <Link to="/past" className="navbar2-link">PAST</Link>
         </div>
</div>
    
  )
}

export default navbar
