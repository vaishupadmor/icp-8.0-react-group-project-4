import React,{useState,useEffect} from 'react'
import "./productcard.css"
import { Link } from 'react-router-dom'

function finder(element) {
    if(element==1){
        
            console.log(e.target.src)
    }
}
// .target.__reactFiber$27u9k16zt6h.child.memoizedProps.child.child.memoizedProps.src
function productcart({imgurl,name,price,description}) {
    
  return (
    <div className="container-gameproduct">
    <div className="detail-gamecontainer" onClick={(e)=>{
        console.log(e)
    }}>
        <div className="gameimg-con">
            <img src={imgurl} className='game-img' id='game-img' onClick={finder(1)}/>
            
        </div>
        <div className="game-content">
            <h1 className="game-name" onClick={(e)=>{
                console.log(e.target.innerText)
            }}>{name} </h1>
            <div className="game-price" onClick={(e)=>{
                console.log(e.target.innerText)
            }} >{price}</div>
            <p>{description}</p>
            <div className="game-buttons">
                <button type="submit" className='btn-game'>Check Out</button>
                <button type="submit" className='btn-games'  onClick={(e)=>{
        
        console.log(e)}
    
    }
        >Add To Cart 
                    <span>
                        <svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="border-game"></div>
        </div>
    </div>

    {/* <div className="title">Similar product</div>
    <div className="listProduct"></div> */}
</div>
  )
}

export default productcart