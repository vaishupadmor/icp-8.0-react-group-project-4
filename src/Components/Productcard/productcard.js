import React, { useState, useEffect } from 'react'
import "./productcard.css"
import { Link } from 'react-router-dom'
import { Shopcard } from '../../Config/shopcard'

function Productcart({ imgurl, name, price, description }) {

  return ( <>
    
        <div className="gameimg-con">
            <img src={imgurl} className='game-img' id='game-img' />
            
        </div>
        <div className="game-content">
            <h1 className="game-name">{name} </h1>
            <div className="game-price">{price}</div>
            <p>{description}</p>
          
            
        </div>
</>
  )
}


function productcard() {
    // const Addtocart = () =>{
    //     const { cartID } = useParams();
    //     const [data, setData] = useState({
    //     name: '',
    //     price: '',
    //     imgurl: '',
    //     description: ''
    // });
    // useEffect(() => {
    //     const Datacart = Shopcard.find((item) => { return item.id == cartID })
    //     setData(Datacart);
        
        
    // }, [cartID]);
    // }
    // const [title , setTitle] = useState('')
    // const [price , setPrice] = useState('')
    // const [imgurl , setImgurl] = useState('')
    // const [description , setDescription] = useState('')
    // const Adddata = () =>{
    //     const store = JSON.parse(localStorage.getItem('data')) || [];
    //     const newData = {
    //         title,
    //         price,
    //         imgurl,
    //         description
    //     };
    //     localStorage.setItem('data' ,  JSON.stringify(store));
    //  }
  return (<>
    {
      Shopcard.map((shopcard) => {

        const { name, price, imgurl, description ,id} = shopcard;
        
        return (
          <div className="container-gameproduct">
            <div className="detail-gamecontainer">
            <Productcart name={name} price={price} imgurl={imgurl} description={description} />
            <div className="game-buttons">
              <button type="submit" className='btn-game'>Check Out</button>
              <Link to={`/shop/${id}`} ><button type="submit" className='btn-games btn-addtocart'>Add To Cart 
                    
                </button></Link>
                <div className="border-game"></div>
            </div>
          </div>
          </div>
            )
})
    }
  </>)
}

export default productcard

