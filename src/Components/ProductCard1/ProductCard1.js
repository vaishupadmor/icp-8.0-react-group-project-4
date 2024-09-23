import React, { useState, useEffect } from 'react';
import "./ProductCard1.css";
import { Link } from 'react-router-dom';
import { Shopcard } from '../../Config/ShopCard1';
import toast from 'react-hot-toast';

function Productcart({ imgurl, name, price, description }) {
  return (
    <>
      <div className="gameimg-con">
        <img src={imgurl} className='game-img' id='game-img' alt={name} />
      </div>
      <div className="game-content">
        <h1 className="game-name">{name}</h1>
        <div className="game-price">{price}</div>
        <p className='game-dec'>{description}</p>
      </div>
    </>
  );
}

function Productcard() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem('counter', counter);
    const savedcounter = localStorage.getItem(counter)
    console.log(savedcounter)
  }, [counter]);
  const [view, setView] = useState(false)
  return (
    <>
    <h3 className='shop-counter'>Items in Cart: {counter}</h3> 
      {Shopcard.map((shopcard) => {
        const { name, price, imgurl, description, id, gamelink } = shopcard;

        return (
          <div className="container-gameproduct" key={id}>
            <div className="detail-gamecontainer">
              <Productcart name={name} price={price} imgurl={imgurl} description={description} />
              <div className="game-buttons">
              
                <a href={gamelink} target='_blank' className='btn-game btncheck'>View Product</a>
                <button 
                  type="button" 
                  className='btn-games btn-addtocart' 
                  onClick={() => {
                    if (counter==0) {
                      setCounter(counter + 1);
                      console.log(counter + 1);
                      setView(!view)
                    }
                     // Log the updated counter
                  }}
                >
                  Add To Cart
                </button>
                <Link to={view?`/shop/${id}`:""} onClick={()=>{
                  view?toast.success('Happy to take you as client '):toast.error('Please add something to your cart')
                }} >
                  <button className='btn-game btnview'>
                  Check Out
                  </button>
                </Link>
                <div className="border-game"></div>
              </div>
            </div>
          </div>
        );
      })}
      
    </>
  );
}

export default Productcard;