import React from 'react'
import './shop.css'
import Imgs from './shopimgs/5258892.jpg'
import { Link } from 'react-router-dom'
import  Product from './../../Components/Productcard/productcard'
import {Shopcard} from './../../Config/shopcard'
const Card = () => {
    return (
        <div className='card-shop'>
            <img src={Imgs} alt="img" className='card-imgshop' />
            <div className='overlay'>
                <h1 className='card-titleshop '>Gear Up for Victory</h1>
                <p className='card-detailsshop'>Find the ultimate gaming equipment to dominate your matches. From high-performance keyboards and mice to comfortable headsets and stylish apparel, we've got everything you need to level up your game.</p>
                <Link to="/cart" className='cart-btnshop'>Learn More</Link>

            </div>

        </div>

    )
}
const Cardintro = ({ defineN, defineI, imgurl }) => {
    return (
        <div className='define-product'>
            <img src={imgurl} className='imgs-sm'></img>
            <div className='define-body'>
                <h1 className='define-name'>{defineN}</h1>
                <p className='define-info'> {defineI}</p>
            </div>
        </div>
    )
}
const Feature =[
    {
        defineN:'💯% cotton',
        defineI:'Our products are made with premium 100% cotton, offering exceptional comfort, breathability',
        imgurl:'https://i.pinimg.com/1200x/ed/16/60/ed166092310d4f85a752a33257c8449c.jpg'
    },
    {
        defineN:'💯% cotton',
        defineI:'Our products are made with premium 100% cotton, offering exceptional comfort, breathability',
        imgurl:'https://i.pinimg.com/1200x/ed/16/60/ed166092310d4f85a752a33257c8449c.jpg'
    }

]

function shop() {
    return (
        <div>
            <div className='nav'></div>
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
                {
                    Shopcard.map((shopcard)=>{
                        const{name,price,imgurl,description}=shopcard;
                        return(
                            <Product name={name} price={price} imgurl={imgurl} description={description} />
                        )
                    })
                }

            </div>
            <Link to="/gocart" className='cart-btnshop'>add to Cart</Link>
        </div>
    )
}

export default shop