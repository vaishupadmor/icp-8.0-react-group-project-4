import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="path-to-your-logo.png" alt="Esports Logo" className="logo" />
          Esports
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="/gallery" className="navbar-link">Gallery</a></li>
          <li className="navbar-item"><a href="/tournament" className="navbar-link">Tournaments</a></li>
          <li className="navbar-item"><a href="/shop" className="navbar-link">Shop</a></li>
          <li className="navbar-item"><a href="/login" className="navbar-link">login</a></li>
          <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
          <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
        </ul>
        <div className="navbar-toggle" id="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;