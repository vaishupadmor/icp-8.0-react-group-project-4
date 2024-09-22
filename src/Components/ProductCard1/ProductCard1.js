import React, { useState, useEffect } from 'react'
import "./ProductCard1.css"
import { Link } from 'react-router-dom'
import { Shopcard } from '../../Config/ShopCard1'

function Productcart({ imgurl, name, price, description }) {

  return (<>

    <div className="gameimg-con">
      <img src={imgurl} className='game-img' id='game-img' />

    </div>
    <div className="game-content">
      <h2 className="game-name">{name} </h2>
      <div className="game-price">{price}</div>
      <p className='game-dec'>{description}</p>


    </div>
  </>
  )
}


function productcard() {
  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{

    localStorage.setItem('counter', parseInt(counter));
  }),[counter]


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

        const { name, price, imgurl, description, id , gamelink} = shopcard;

        return (
          <div className="container-gameproduct">
            <div className="detail-gamecontainer">
              <Productcart name={name} price={price} imgurl={imgurl} description={description} />
              <div className="game-buttons">
                <a href={gamelink} className='btn-game btncheck' >Check Out</a>
                <Link to={`/shop/${id}`} onClick={()=>{
                  setCounter(counter + 1);
                  console.log(counter);
                }} ><button type="submit" className='btn-games btn-addtocart'>Add To Cart

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

