import React from 'react'
import './../css/pages.css'
import BadmintonHome from './Reciver'
import { TEAMVOLERTY } from '../../../Config/gallerydata'
function VolleyBall() {
    return (
        <div>
            <h1 className='team-heading'>TEAM MEMBERS</h1>
            <div className='teams-container'>
       
       {TEAMVOLERTY.map((teamdetails)=>{
            return   <BadmintonHome
            imgUrl={teamdetails.imgUrl}
            name={teamdetails.title}
            
            />
    
       })}
     </div> 
     </div>
    )
}

export default VolleyBall
