import React from 'react'
import './../css/pages.css'
import BadmintonHome from './../Badminton/BadmintonHome'
import { BADMINTON } from '../../../Config/gallerydata'
function Badminton() {
    return (
        <div>
            <h1 className='team-heading'>BADMINTON</h1>
            <div className='teams-container'>
       
       {BADMINTON.map((teamdetails)=>{
            return   <BadmintonHome
            imgUrl={teamdetails.imgUrl}
            name={teamdetails.name}
            
            />
    
       })}
     </div> 
     </div>
    )
}

export default Badminton
