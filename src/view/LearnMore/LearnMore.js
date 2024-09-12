import React from 'react';
import "./LearnMore.css";
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

      <div  className='card-description-container'>
      <p className='card-description'>
        Free Fire is a free-to-play battle royale game developed and published by Garena for Android and iOS. It was released on 8 December 2017. It became the most downloaded mobile game globally in 2019 and has over 1 billion downloads on Google Play Store. In the first quarter of 2021 it was the highest
        </p>


      </div>
    </div>
  )
}

export default LearnMore
