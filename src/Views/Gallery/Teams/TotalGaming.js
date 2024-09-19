import React from 'react'
import './../css/pages.css'
import BadmintonHome from './Reciver'
import { TOURNAMENTS } from '../../../Config/gallerydata'
function Badminton() {
    return (
        <div>
            <h1 className='team-heading'>Four Angry Men</h1>
            <div className='teams-container'>
       
       {TOURNAMENTS.map((teamdetails)=>{   
            return   <BadmintonHome
            imgUrl={teamdetails.imgUrl}
            name={teamdetails.title}
            
            />
    
       })}
     </div> 
     </div>
    )
}

export default Badminton
