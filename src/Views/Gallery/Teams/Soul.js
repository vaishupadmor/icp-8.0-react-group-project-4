import React from 'react'
import './../css/pages.css'
import BadmintonHome from './Reciver'
import { SOUL } from '../../../Config/gallerydata'
function Soul() {
    return (
        <div>
            <h1 className='team-heading'>TEAM MEMBERS</h1>
            <div className='teams-container'>
       
       {SOUL.map((teamdetails)=>{
            return   <BadmintonHome
            imgUrl={teamdetails.imgUrl}
            name={teamdetails.title}
            
            />
    
       })}
     </div> 
     </div>
    )
}

export default Soul
