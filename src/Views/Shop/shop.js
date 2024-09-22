import React from 'react'
import './shop.css'
import Imgs from './shopimgs/5258892.jpg'
import { Link } from 'react-router-dom'
import  Product from '../../Components/ProductCard1/ProductCard1'
import {Shopcard} from '../../Config/ShopCard1'
import Navbar from '../../Components/Navbar1/Navbar'
import Footer from './../../Components/Footer/Footer1'
const Card = () => {
    return (
        <div className='card-shop'>
            <img src={Imgs} alt="img" className='card-imgshop' />
            <div className='overlay'>
                <h1 className='card-titleshop '>Gear Up for Victory</h1>
                <p className='card-detailsshop'>Find the ultimate gaming equipment to dominate your matches.<span className='remove'> From high-performance keyboards and mice to comfortable headsets and stylish apparel, we've got everything you need to level up your game.</span></p>
               

            </div>

        </div>

    )
}
const Cardintro = ({ defineN, defineI, imgurl }) => {
    return (
        <div className='define-product'>
            <img src={imgurl} className='imgs-sm'></img>
            <div className='define-body'>
                <h2 className='define-name'>{defineN}</h2>
                <p className='define-info'> {defineI}</p>
            </div>
        </div>
    )
}
const Feature =[
    {
        defineN:'Level Up Your Gaming Experience!',
        defineI:' featuring the latest blockbusters and innovative indie titles. Our mission? .',
        imgurl:'https://i.pinimg.com/1200x/ed/16/60/ed166092310d4f85a752a33257c8449c.jpg'
    },
    {
        defineN:'Your Next Quest Starts Here!',
        defineI:' Join our vibrant community of gamers with special events, tournaments',
        imgurl:'https://img.freepik.com/free-photo/medium-shot-victorious-gamer-desk_23-2149350004.jpg?uid=R162707548&ga=GA1.1.230918377.1693590387&semt=ais_hybrid'
    }

]

function shop() {
    return (
        <div>
           <Navbar/>
            <div className='intro-container'>
                <Card className='cards-shop' />
                <div className='define-container'>
             
                    {
                        Feature.map((feature)=>{
                            const {defineN,defineI,imgurl}=feature;
                            return(
                                <Cardintro defineN={defineN} defineI={defineI} imgurl={imgurl} />
                            )
                        }

                        )
                    }
                   
                </div>
               
            </div>
            <div className='shop-container'>
            <div class="title-games">PRODUCT DETAIL</div>
            </div>
            <div className='product-container'>
               <Product/>

            </div>

            <Footer/>
            
        </div>
    )
}

export default shop