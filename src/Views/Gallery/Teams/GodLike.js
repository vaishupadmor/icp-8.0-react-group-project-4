import React from 'react'
import './../css/pages.css'
import BadmintonHome from './Reciver'
import { GodLike } from '../../../Config/gallerydata'
function Badminton() {
    return (
        <div>
            <h1 className='team-heading'>TEAM MEMBERS</h1>
            <div className='teams-container'>
       
       {GodLike.map((teamdetails)=>{   
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
