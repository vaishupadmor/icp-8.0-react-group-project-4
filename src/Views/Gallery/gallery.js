import React from 'react';
import "./gallery.css"
import Navbar from '../../Components/Navbar/Navbar';
import Services from './Home/Services/Services';


function Tournament() {
    return (
        <>
      <Navbar/>
        <div className='galleryHome'>
        <Services />
        </div>
        
        </>
    )
}

export default Tournament
