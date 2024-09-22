import React from 'react'
import './../css/pages.css'
import BadmintonHome from './Reciver'
import { VELOCITY } from '../../../Config/gallerydata'
function VelocityGaming() {
    return (
        <div>
            <h1 className='team-heading'>TEAM MEMBERS</h1>
            <div className='teams-container'>
       
       {VELOCITY.map((teamdetails)=>{
            return   <BadmintonHome
            imgUrl={teamdetails.imgUrl}
            name={teamdetails.title}
            
            />
    
       })}
     </div> 
     </div>
    )
}

export default VelocityGaming
