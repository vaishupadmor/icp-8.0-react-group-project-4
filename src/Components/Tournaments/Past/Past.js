import React from 'react';
import '../Tournament.css';
import trophy from '../../../img/trophy.png'; 
import group from '../../../img/group.png';
import { Link } from 'react-router-dom';
import { products } from '../../../Config/Past';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer1'

function Past() {
  return (
    <div className='tourcart-container'>
      <Navbar/>
      {products.map((productItem, index) => (
        <div className='cart-tour' key={index}>
          <img src={productItem.imgUrl} alt={productItem.title} className='tourcart-img' />
          <hr />
          <p><b>{productItem.title}</b></p>
          <hr />
          <p className='tourcart-mode'>
            <span className='tourcart-text1'><b>{productItem.mode}</b></span>
            <span className='tourcart-text2'>
              <b>{productItem.platform}&nbsp;</b>
              <i className="fa-solid fa-desktop"></i>
            </span>
          </p>
  
          <p className='tourcart-mode'>
            <span className='tourcart-text1'>
              <img src={trophy} alt='trophy' className='cart-icon' /> {productItem.prize}
            </span>
            <span className='tourcart-text2'>
              <img src={group} alt='participants' className='cart-icon' /> {productItem.participants}
            </span>
          </p>
          
          <p className='tourcart-detail'>
            <Link to={"/past/" + productItem.id}>{productItem.status}</Link>
          </p>
          <hr />
          <p><b>{productItem.date}</b></p>
        </div>
      ))}
      <Footer/>
    </div>
  );
}


export default Past
