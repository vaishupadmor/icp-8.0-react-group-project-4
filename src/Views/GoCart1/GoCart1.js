import React, { useState, useEffect } from 'react';
import './GoCart1.css';
import { useParams } from 'react-router-dom';
import { Shopcard } from '../../Config/ShopCard1';
import { Link } from 'react-router-dom';
import  toast, { Toaster } from 'react-hot-toast';
import {Navbar1} from '../../Components/Navbar1/Navbar';
import Footer from '../../Components/Footer/Footer1';


const App = () => {

    const [counter, setCounter] = useState(1);
  useEffect(()=>{

    localStorage.setItem('counter', parseInt(counter));
  }),[counter]
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
        <>
        <Navbar1/>
        <div className="container-game">
        <Link to='./../../shop' className='btncheck shopbtn'>shop</Link>

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
                    <div className="btn-container ">
                       <Link to='./../../shop'> <button type='submit' onClick={()=>{
                            toast.success("Game is Purchased")
                            
                        }} className='btnview'>Buy Now</button> </Link>
                     <Link to='./../../shop' >   <button type='submit' className='btnview' onClick={()=>{
                            toast.success("Item removed from cart")
                            setData({
                                name: '',
                                price: '',
                                imgurl: '',
                                description: ''
                            })
                            localStorage.removeItem('data');
                            setCounter(counter - 1);
                            console.log(counter);
                        }}  >Remove From Cart
                            
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
        <Footer/>
        </>
    )
}
export default App;