import React from 'react';
import './tournament.css';
import trophy from '../../img/trophy.png'; 
import group from '../../img/group.png';
import { Link } from 'react-router-dom';
import { products } from './config/dataa';
import Navbar from '../tournaments/navbar/navbar'

function tournament() {
  return (
    <div className='cart-container'>
    <Navbar/>
    {products.map((productItem, index) => (
      <div className='cart' key={index}>
        <img src={productItem.imgUrl} alt={productItem.title} className='cart-img' />
        <hr />
        <p><b>{productItem.title}</b></p>
        <hr />
        <p className='cart-mode'>
          <span className='cart-text1'><b>{productItem.mode}</b></span>
          <span className='cart-text2'>
            <b>{productItem.platform}&nbsp;</b>
            <i className="fa-solid fa-desktop"></i>
          </span>
        </p>

        <p className='cart-mode'>
          <span className='cart-text1'>
            <img src={myImg} alt='trophy' className='cart-icon' /> {productItem.prize}
          </span>
          <span className='cart-text2'>
            <img src={myImg1} alt='participants' className='cart-icon' /> {productItem.participants}
          </span>
        </p>
        
        <p className='cart-detail'>
          <Link to={productItem.link}>{productItem.status}</Link>
        </p>
        <hr />
        <p><b>{productItem.date}</b></p>
      </div>
    ))}
  </div>
  )
}

export default tournament

