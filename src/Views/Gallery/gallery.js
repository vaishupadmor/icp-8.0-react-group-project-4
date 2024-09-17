import React from 'react';
import "./gallery.css"
import { Link } from 'react-router-dom';
import { TEAMS } from './../../Config/gallerydata';



function Tournament() {
  return (
    <div className='cart-container'>
    {TEAMS.map((team, index) => (
      <div className='cart' key={index}>
        <img src={team.imgUrl} alt={team.title} className='cart-img' />
       
        <h2 className='teamname'>{team.name}</h2>
     
      </div>
    ))}
  </div>
  )
}

export default Tournament
