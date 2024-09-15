import React from 'react'
import { useParams } from 'react-router-dom';
import {products} from "../../../../config/ongoing"
import './ongoing1.css'
import Flag from '../../../../img/flag.png'
function ongoing1() {


    let { neha } = useParams();
    let linkObject = products.filter((item) => item.id == neha);
    linkObject = linkObject[0];
  return (

  
    <div>
        <img src={linkObject.bannerUrl} className='tournament-img' />
        <div>
      
      <div className="tournament-header">
        <p className='tournament-title'><b>TEC Showdown Series-Season 4</b></p>
        <div className="tournament-info1">
          <p className='tournament-end'><b>Tournament ends in 1 day</b></p>
          <p className='share'>Share 
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
          </p>
        </div>
      </div>
      <i className="fa-solid fa-desktop"></i>
      <p className='tournament-host'>Hosted by <b>TEC</b></p>

      <hr className='white-line' />

      <p className='sub-title'>Overview</p>

 <div className="tournament-container1" >
        <p className="tournament-detail1">Game: Valorant</p>
        <p className="tournament-detail1">Team Size: 5-1</p>
      </div>
      <div className="tournament-container1">
        <p className="tournament-detail1">Prize Pool: 1,00,000 INR</p>
        <p className="tournament-detail1">Format: Single Elimination</p>
      </div>
      <div className="tournament-container1">
        <p className="tournament-detail1">Registration Start: August 31st, 2024, 12:00 PM</p>
        <p className="tournament-detail1">Registration End: September 4th, 2024, 4:00 PM</p>
      </div>
      <div className="tournament-container1">
        <p className="tournament-detail1">Tournament Start: September 9th, 2024</p>
        <p className="tournament-detail1">Tournament End: September 15th, 2024</p> 
      </div>     
 
      <hr className='white-line' />

      <p className='sub-title'>Rules</p>
      <div className='tournament-rule'>
        <p className='rules-heading'><b>Event Information</b></p>
        <ul>
          <li><b>Event Name:</b> TEC Showdown Series-Season 4</li>
          <li><b>Dates:</b> 5th September – 15th September</li>
          <li><b>Registrations:</b> 31st August – 4th September</li>
          <li><b>Main Event:</b> 9th September - 15th September</li>
        </ul>

        <p className='rules-heading'><b>Tournament Overview</b></p>
        <ul>
          <li><b>Prize Pool:</b> INR 1,00,000</li>
          <li>1st Place: INR 50,000</li>
          <li>2nd Place: INR 30,000</li>
          <li>3rd Place: INR 20,000</li>
        </ul>
        <p>All players must reside in India. Tier 1 teams and VCSA players or teams are not allowed unless invited. Premier team slots will be locked on 8th September.</p>

        <p className='rules-heading'><b>Tournament Format</b></p>
        <p>The tournament starts with single elimination brackets. The top 4 teams from the open qualifier will join the Top 4 Premier teams in Double Elimination. The Finals will be on 15th September.</p>

        <p className='rules-heading'><b>Game Specific Rules</b></p>
        <ul>
          <li><b>Match Creation:</b> Admin will create the custom match lobby with specified settings and invite players. Matches will be played until one team accumulates 13 round wins.</li>
          <li><b>Game Settings:</b> Party Status: Close, Map: See match details, Mode: Tournament, Cheats: Off, Default Servers: Mumbai Server.</li>
          <li><b>Match Hosting:</b> All matches will use Custom Games (Tournament Mode) with only the tournament organizer allowed to enter the observer slot.</li>
          <li><b>Usage of Pause Function:</b> Each team has 5 minutes of Technical Pause time. In-game pause is for tactical purposes only.</li>
          <li><b>Disconnections:</b> Disconnection proof must be in video form. Teams have 10 minutes to reconnect; otherwise, the match continues 4 v 5.</li>
        </ul>

        <p className='rules-heading'><b>General Rules</b></p>
        <ul>
          <li>No sharing of accounts or aliases. Violations lead to disqualification.</li>
          <li>Substitutes allowed. Final roster is locked after tournament starts. Only 1 change is allowed for LAN events.</li>
          <li>Any abuse of staff or other violations may lead to temporary bans or disqualification.</li>
          <li>Players must be 16 years or older.</li>
        </ul>

        <p className='rules-heading'><b>Gameplay</b></p>
        <ul>
          <li>Players moving outside map boundaries may forfeit the game.</li>
          <li>Use only specified weapon versions. No re-balancing or restricted items.</li>
          <li>Report any issues with ADS to a Tournament Official immediately.</li>
          <li>Only registered team members and officials may be in the match lobby.</li>
          <li>Matches must continue if a player lags out after 30 seconds unless specified otherwise.</li>
        </ul>

        <p className='rules-heading'><b>Match Procedures</b></p>
        <ul>
          <li>Lineup must be reported 30 minutes before game time.</li>
          <li>Map veto conducted on mapban.gg.</li>
          <li>5-minute break between maps allowed.</li>
          <li>Winning captain posts a screenshot of the end game scoreboard on discord.</li>
        </ul>

        <p className='rules-heading'><b>Match Protests</b></p>
        <ul>
          <li>Protests for incorrect settings or high pings must include detailed evidence and be communicated via discord.</li>
          <li>Only Team Captains can raise protests. Misbehavior during protests will lead to dismissal and potential disqualification.</li>
        </ul>

        <p className='rules-heading'><b>LevelUp Leaderboard</b></p>
        <ul>
          <li>Points awarded for match wins, map plays, kills, assists, MVPs, and tournament progression.</li>
          <li>Bonus points for Premier and Collegiate teams. Penalties for disruptive behavior.</li>
        </ul>
      </div>

      <div className='countries-section'>
        <p className='country'><b>Countries</b></p>
        <img src={Flag} alt='flag' className='flag' />
      </div>
      <hr className='white-line' />
      <h2 class="info-title">Information</h2>

      <div class="container">
  <div class="tournament-info-container">
    <div class="tournament-info">
      
      <p class="info-text">
        Gear up for the TEC Showdown Series (Season 4), a premier Valorant tournament scheduled to run from September 5th to 15th. This season brings together some of the most talented teams and players from across the community, all vying for a share of the impressive 1 lakh INR prize pool. Expect to witness thrilling matches filled with nail-biting clutches, strategic gameplay, and incredible displays of skill as these top competitors battle it out for supremacy.
      </p>
      <p class="info-text">
        Season 4 promises to be an unforgettable event, with each team bringing their unique playstyle and tactics to the table. From expertly executed strategies to jaw-dropping individual performances, every match will keep you on the edge of your seat. Whether you're a die-hard Valorant fan or new to the game, this tournament is sure to deliver non-stop action and entertainment.
      </p>
      <p class="info-text">
        As the teams progress through the brackets, the stakes will only get higher, with each round bringing them one step closer to the ultimate goal: being crowned the champions of Season 4. Mark your calendars, invite your friends, and get ready to witness the best of Valorant esports. This is one event you won't want to miss!
      </p>
    </div>
  </div>
</div>


    </div>
        </div>
  )
}

export default ongoing1
