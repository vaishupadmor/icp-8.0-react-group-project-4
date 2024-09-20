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
        defineI:' featuring the latest blockbusters and innovative indie titles. Our mission? To connect you with epic adventures and unforgettable gameplay.',
        imgurl:'https://i.pinimg.com/1200x/ed/16/60/ed166092310d4f85a752a33257c8449c.jpg'
    },
    {
        defineN:'Your Next Quest Starts Here!',
        defineI:' Join our vibrant community of gamers with special events, tournaments, and sneak peeks at upcoming releases',
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
               <Product/>

            </div>
            
        </div>
    )
}

export default shop