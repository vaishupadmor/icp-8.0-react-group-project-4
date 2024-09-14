import React from 'react'
import { useParams } from 'react-router-dom';
import {products} from "./../../../config/upcoming"
import './upcoming1.css'
function upcoming1() {


    let { neha } = useParams();
    let linkObject = products.filter((item) => item.id == neha);
    linkObject = linkObject[0];
  return (

  
    <div>
      <p>
      {linkObject.title}
      </p>
        <h1 className='upcoming1-heading'>   roll number{linkObject.id} </h1>
        <img src={linkObject.imgUrl}  />
                

      
    </div>
  )
}

export default upcoming1
