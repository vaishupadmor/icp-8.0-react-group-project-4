import React from 'react';
import ImgGame from './free_fire.jpg';

function LearnMore() {
  return (
    <div>
      <div className='card-img-container'>
        <img src={ImgGame}
        alt="free_fire game"
        className='card-img'
        />
      </div>
    </div>
  )
}

export default LearnMore
