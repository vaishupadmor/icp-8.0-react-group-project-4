import React from 'react'
import "./../pages.css"
import GamingHome from "./17GAmingHome.js"
import { TEAM17GAMING } from '../data.js'


function teams() {
  return (
    <div>
        <h1 className='team-heading'>Teams Tournaments</h1>
        <div className='teams-container'>
   
   {TEAM17GAMING.map((teamdetails)=>{
        return   <GamingHome
        imgUrl={teamdetails.imgUrl}
        name={teamdetails.name}
        
        />

   })}
 </div> 
 </div>
)
}     
export default teams
