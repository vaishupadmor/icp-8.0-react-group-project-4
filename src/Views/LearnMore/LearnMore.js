import React from 'react';
import "./LearnMore.css";
import Footer from "./../../Components/Footer/footer";
import ImgGame from './free_fire.jpg';
import ImgBadlandersGame from './badlanders.jpg';
import ImgPubgGame from './pubg.jpg';
import ImageKabaddi from './cricket.jpg';
import ImgEsports from "./esports.jpg"

function LearnMore() {
  return (
    <div>
      <div>
        <img src={ImgEsports}
        alt="esports"
        className='game-img'
        />
        <p className='app-title'>
        Put simply, esports is competitive level gaming. 
        </p>
        <p className='app-title'>
        It's teams of people playing games against each other at a professional level,
        </p>
        <p className='app-title'> 
          regularly winning huge sums of money as prizes.

        </p>
        <p className='app-title'>
        These esports players are contracted to play for a of different organisations.
        
        </p>
      
      </div>
      <h2 className='card-heading'>More information about games....</h2>
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
          Free Fire is a free-to-play battle royale game developed and published by Garena for Android and iOS. It was released on 8 December 2017...
          </p>
          <p className='card-description'>
          Free Fire has emerged as one of the premiere go-to battle royale games on the mobile market, beating Call of Duty: Mobile and running close against PUBG Mobile. In your quest to be the last one standing each game, you must know how the action game functions! The game is quite simple for anyone to pick up, but it only takes a special one to master the mechanics and rise to the top of the rankings! If you’re among the latter, then this beginner’s guide will be especially handy!!!  
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
          Badlanders Developer: Netease Release Date: 2022-01-14...
          </p>
          <p className='card-description'>
            Simple! However, in contrast to games like PUBG Mobile or Free Fire, the objective in Badlanders is not necessarily to kill everyone as there are other ways to win a match. Instead of fighting, you can choose to play stealthily, and simply escape from the map via the extraction points that open up during the match!!!
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img-container'>
          <img src={ImgPubgGame}
            alt="free_fire game"
            className='card-img'
          />
        </div>

        <div className='card-description-container'>
          <h2 className='card-title'>Pubg</h2>
          <p className='card-description'>
          A version for the Stadia streaming platform was released in April 2020, with Xbox Series X/S and PlayStation 5 versions being released in November 2020. The game has been free-to-play for all platforms since January 12, 2022... 
          </p>

          <p className='card-description'>
           Keep an eye on the shrinking play zone (safe zone) and move accordingly to avoid taking damage from the blue zone. Use vehicles to move across the map quickly, but be cautious as they can attract attention. It is best always to be aware of your surroundings. Remember to use objects on the map for cover!!!
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img-container'>
          <img src={ImageKabaddi}
            alt="free_fire game"
            className='card-img'
          />
        </div>

        <div className='card-description-container'>
          <h2 className='card-title'>Cricket</h2>
          
          <p className='card-description'>
            Recognize the goal of the game. As in most field games, the goal of cricket is to score points, called runs, against the opposing team by running from one point to another before the play can be ended or you're run out by the defenders, who are called the “fielding team.” The team at bat is called the “batting team
          </p>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default LearnMore
