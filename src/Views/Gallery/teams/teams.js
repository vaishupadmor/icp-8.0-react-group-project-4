import React from 'react'
import "./teams.js"
import Teams from "./teamsHome"
import { TEAMS } from '../../config/data.js'


function teams() {
  return (
    <div>
        <h1 className='team-heading'>Teams Tournaments</h1>
        <div className='teams-container'>
   
   {TEAMS.map((teamdetails)=>{
        return   <Teams
        imgUrl={teamdetails.imgUrl}
        name={teamdetails.name}
        
        />

   })}
 </div> 
 </div>
)
}     
export default teams
