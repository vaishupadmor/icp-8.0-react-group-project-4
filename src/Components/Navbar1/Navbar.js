import React,{ useState} from 'react'
import './Navbar.css'
import  logo from './../../img/20200713_110239.jpg'
import  { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useParams } from 'react-router-dom';
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  // const { cartID } = useParams();
  return (
    <>

    <nav className='navbar'>
        <div className='nav-logo'>
    <img src={logo} alt="logo" className='nav-logo-img' />
        <h3>RTC:ES</h3>
        </div>
        <div className={
           showNavbar ? " mobile-menu-link" : "nav-links"
        }>
          <ul className='navbar-links'>
            <li className='list'><Link to="./../" className="navbar-link">Home <FaHome/></Link></li>
            <li className='list'><Link to="./../gallery" className="navbar-link">Gallery</Link></li>
            <li className='list'><Link to="./../tournament" className="navbar-link">Tournament</Link></li>
            <li className='list'><Link to="./../shop" className="navbar-link">Shop</Link></li>
            <li className='list'><Link to="./../about" className="navbar-link">About</Link></li>
            <li className='list'><Link to="./../contact" className="navbar-link">Contact us</Link></li>
            <li className='list'><Link to="./:cartID" className="navbar-link">Gocart</Link></li>
            <li className='list'><Link to="./../signup" className="navbar-link sign">Signup/login</Link></li>
          </ul>
          
        </div>
        <div className='hamburger-menu'>
          <h1>
          <GiHamburgerMenu className='hamburger-menu-icon' onClick={()=>setShowNavbar(!showNavbar)}/>
          </h1>

          </div>
        
    </nav>
    </>
  )
}

function Navbar1() {
  const [showNavbar1, setShowNavbar1] = useState(false)
  // const { cartID } = useParams();
  return (
    <>

    <nav className='navbar'>
        <div className='nav-logo'>
    <img src={logo} alt="logo" className='nav-logo-img' />
        <h3>RTC:ES</h3>
        </div>
        <div className={
           showNavbar1 ? " mobile-menu-link" : "nav-links"
        }>
          <ul className='navbar-links'>
            <li className='list'><Link to="./../" className="navbar-link">Home <FaHome/></Link></li>
            <li className='list'><Link to="./../gallery" className="navbar-link">Gallery</Link></li>
            <li className='list'><Link to="./../tournament" className="navbar-link">Tournament</Link></li>
            <li className='list'><Link to="./../shop" className="navbar-link">Shop</Link></li>
            <li className='list'><Link to="./../about" className="navbar-link">About</Link></li>
            <li className='list'><Link to="./../contact" className="navbar-link">Contact us</Link></li>
            <li className='list'><Link to="./:cartID" className="navbar-link">Gocart</Link></li>
            <li className='list'><Link to="./../signup" className="navbar-link sign">Signup/login</Link></li>
          </ul>
          
        </div>
        <div className='hamburger-menu'>
          <h1>
          <GiHamburgerMenu className='hamburger-menu-icon' onClick={()=>setShowNavbar1(!showNavbar1)}/>
          </h1>

          </div>
        
    </nav>
    </>
  )
}

export default Navbar
export {Navbar1}