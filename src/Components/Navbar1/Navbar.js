import React from 'react'
import './Navbar.css'
import  logo from './../../img/20200713_110239.jpg'
import  { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='nav-logo'>
    <img src={logo} alt="logo" className='nav-logo-img' />
        <h3>RTC:ES</h3>
        </div>
        <div className='nav-links'>
          <ul>
            <li><Link to="./../" className="navbar-link">Home</Link></li>
            <li><Link to="./../gallery" className="navbar-link">Gallery</Link></li>
            <li><Link to="./../tournament" className="navbar-link">Tournament</Link></li>
            <li><Link to="./../shop" className="navbar-link">Shop</Link></li>
            <li><Link to="./../about" className="navbar-link">About</Link></li>
            <li><Link to="./../contact" className="navbar-link">Contact us</Link></li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar