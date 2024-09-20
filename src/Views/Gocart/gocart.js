import React, { useState, useEffect } from 'react';
import './gocart.css';
import { useParams } from 'react-router-dom';
import { Shopcard } from './../../Config/shopcard';


const App = () => {
    const { cartID } = useParams();
    const [data, setData] = useState({
        name: '',
        price: '',
        imgurl: '',
        description: ''
    });
    useEffect(() => {
        const Datacart = Shopcard.find((item) => { return item.id == cartID })
        setData(Datacart);  
        localStorage.setItem('data', JSON.stringify(Datacart));
        
    }, [cartID]);


    return (
        <div className="main-container">

            <div className="detail-game">
                <div className="image-container">
                    <img src={data.imgurl} alt="Product Image" />
                </div>
                <div className="content-container">
                    <h1 className="name-game"> {data.name}</h1>
                    <h5>RPG- ification of action game</h5>
                    <div className="game-price">{data.price}</div>
                    <p>{data.description}</p>
                    <div className="btn-container">
                        <button>Buy Now</button>
                        <button type='submit' onClick={()=>{
                            alert("Item removed from cart")
                            setData({
                                name: '',
                                price: '',
                                imgurl: '',
                                description: ''
                            })
                        }}  >Remove From Cart
                            <span>
                                <svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;