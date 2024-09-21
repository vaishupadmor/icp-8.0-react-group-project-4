import React from 'react'
import './Navbar.css'
import  logo from './../../img/20200713_110239.jpg'
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='nav-logo'>
    <img src={logo} alt="logo" className='nav-logo-img' />
        {/* <span>RTC:ES</span>    */}
        </div>
    </nav>
    </>
  )
}

export default Navbar