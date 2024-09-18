import React from 'react'
import './../css/pages.css'
import BadmintonHome from './../../Badminton/BadmintonHome'
import { VOLLEYBALL } from '../../../Config/gallerydata'
function VolleyBall() {
    return (
        <div>
            <h1 className='team-heading'>VOLLEY BALL</h1>
            <div className='teams-container'>
       
       {VOLLEYBALL.map((teamdetails)=>{
            return   <BadmintonHome
            imgUrl={teamdetails.imgUrl}
            name={teamdetails.name}
            
            />
    
       })}
     </div> 
     </div>
    )
}

export default VolleyBall
