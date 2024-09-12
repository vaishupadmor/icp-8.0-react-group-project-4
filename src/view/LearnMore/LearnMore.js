import React from 'react';
import "./LearnMore.css";
import ImgGame from './free_fire.jpg';
import ImgBadlandersGame from './badlanders.jpg'

function LearnMore() {
  return (
    <div>
      <div className='card'>
        <div className='card-img-container'>
          <img src={ImgGame}
            alt="free_fire game"
            className='card-img'
          />
        </div>

        <div className='card-description-container'>
          <h2 className='card-title'>Free Fire</h2>
          <p className='card-description'>
            Free Fire is a free-to-play battle royale game developed and published by Garena for Android and iOS. It was released on 8 December 2017. It became the most downloaded mobile game globally in 2019 and has over 1 billion downloads on Google Play Store. In the first quarter of 2021 it was the highest
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img-container'>
          <img src={ImgBadlandersGame}
            alt="free_fire game"
            className='card-img'
          />
        </div>

        <div className='card-description-container'>
          <h2 className='card-title'>Badlanders</h2>
          <p className='card-description'>
            Simple! However, in contrast to games like PUBG Mobile or Free Fire, the objective in Badlanders is not necessarily to kill everyone as there are other ways to win a match. Instead of fighting, you can choose to play stealthily, and simply escape from the map via the extraction points that open up during the match.
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img-container'>
          <img src={ImgBadlandersGame}
            alt="free_fire game"
            className='card-img'
          />
        </div>
        </div>
    </div>
  )
}

export default LearnMore
