import React from 'react';
import "./gallery.css"
import { Link } from 'react-router-dom';
import { products } from './../config/data';



function Tournament() {
  return (
    <div className='cart-container'>
    {products.map((productItem, index) => (
      <div className='cart' key={index}>
        <img src={productItem.imgUrl} alt={productItem.title} className='cart-img' />
       
        <h2 className='teamname'>{productItem.name}</h2>
     
      </div>
    ))}
  </div>
  )
}

export default Tournament
