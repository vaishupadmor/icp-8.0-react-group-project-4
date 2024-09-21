import React, { useState, useEffect } from 'react';
import './GoCart.css';
import { useParams } from 'react-router-dom';
import { Shopcard } from '../../Config/ShopCard';
import { Link } from 'react-router-dom';
import  toast, { Toaster } from 'react-hot-toast';
const App = () => {
    const { cartID } = useParams();
    const [data, setData] = useState({
        name: '',
        price: '',
        totalprice: '',
        imgurl: '',
        description: ''
    });
    useEffect(() => {
        const Datacart = Shopcard.find((item) => { return item.id == cartID })
        setData(Datacart);  
        
        localStorage.setItem('data', JSON.stringify(Datacart));
        // if (cartID ==1) {
        //     const data1 = Shopcard.find((item) => { return item.id == 1 })
        //     setData(data1);
            
        // localStorage.setItem('data1', JSON.stringify(data1));
        // }
        // else if (cartID ==2) {
        //     const data2 = Shopcard.find((item) => { return item.id == 2 })
        //     setData(data2);
            
        // localStorage.setItem('data2', JSON.stringify(data2));
        // }
        // else if (cartID ==3) {
        //     const data3 = Shopcard.find((item) => { return item.id == 3 })
        //     setData(data3);
            
        // localStorage.setItem('data3', JSON.stringify(data3));
        // }
        // else if (cartID ==4) {
        //     const data4 = Shopcard.find((item) => { return item.id == 4 })
        //     setData(data4);
            
        // localStorage.setItem('data4', JSON.stringify(data4));
        // }
        // else if (cartID ==5) {
        //     const data5 = Shopcard.find((item) => { return item.id == 5 })
        //     setData(data5);
            
        // localStorage.setItem('data5', JSON.stringify(data5));
        // }
        // else if (cartID ==6) {
        //     const data6 = Shopcard.find((item) => { return item.id == 6 })
        //     setData(data6);
            
        // localStorage.setItem('data6', JSON.stringify(data6));
        // }
        
        
    }, [cartID]);

    
    return (
        <div className="container-game">
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
                        <button type='submit' onClick={()=>{
                            toast.success("Game is Purchased")
                            
                        }}>Buy Now</button>
                     <Link to='./../../shop'>   <button type='submit' onClick={()=>{
                            toast.success("Item removed from cart")
                            setData({
                                name: '',
                                price: '',
                                imgurl: '',
                                description: ''
                            })
                            localStorage.removeItem('data');
                        }}  >Remove From Cart
                            <span>
                                <svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                </svg>
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='totalprice-con'>
            <div className='totalprice-con-1'>
                <p className='amount'>Price : </p>
                <p className='amount'>Tax : 30%</p>
                <br/>
                <p className='amount'>Totalprice - discount(500) : </p>
            </div>
            <div className='totalprice-con-2'>
                <p >{data.price}</p>
                <p>₹{data.totalprice}</p>
                <br/>
                <p className='pricetag amount'>₹{data.totalprice-500}</p>
            </div>
        </div>
        </div>
    )
}
export default App;