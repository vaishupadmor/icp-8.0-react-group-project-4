import React from 'react'
import { useParams } from 'react-router-dom';
import {products} from "../../../../Config/upcoming"
import './Upcoming1.css'
import Flag from '../../../../img/flag.png'
import Footer from '../../../Footer/Footer1'
import Navbar from '../../Navbar/Navbar';
function upcoming1() {


    let { neha } = useParams();
    let linkObject = products.filter((item) => item.id == neha);
    linkObject = linkObject[0];
  return (

  
    <div>
      <Navbar/>
        <img src={linkObject.bannerUrl} className='tournament-img' />
        <div>
      
      <div className="tournament-header">
        <p className='tournament-title'><b>{linkObject.title}</b></p>
        <div className="tournament-info1">
          <p className='tournament-end'><b>{linkObject.tourend}</b></p>
          <p className='share'>Share 
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
          </p>
        </div>
      </div>
      <i className="fa-solid fa-desktop"></i>
      <p className='tournament-host'>{linkObject.tourhost}<b>TEC</b></p>

      <hr className='white-line' />

      <p className='sub-title'>Overview</p>

 <div className="tournament-container1" >
        <p className="tournament-detail1">Game: {linkObject.game}</p>
        <p className="tournament-detail1">Team Size: {linkObject.teamsize} </p>
      </div>
      <div className="tournament-container1">
        <p className="tournament-detail1">Prize Pool: {linkObject.prize}</p>
        <p className="tournament-detail1">Format: {linkObject.format}</p>
      </div>
      <div className="tournament-container1">
        <p className="tournament-detail1">Registration Start: {linkObject.registerstart}</p>
        <p className="tournament-detail1">Registration End: {linkObject.registerend} </p>
      </div>
      <div className="tournament-container1">
        <p className="tournament-detail1">Tournament Start: {linkObject.tournamentstart}</p>
        <p className="tournament-detail1">Tournament End: {linkObject.tournamentend}</p> 
      </div>     
 
      <hr className='white-line' />

      <p className='sub-title'>Rules</p>
      <div className='tournament-rule'>
        <h3 className='rules-heading'><b>Event Information</b></h3>
        <ul>
          <li><b>Event Name:</b> {linkObject.title}</li>
          <li><b>Dates:</b> {linkObject.tournamentstart} – {linkObject.tournamentend}</li>
          <li><b>Registrations:</b> {linkObject.registerstart} – {linkObject.registerstart}</li>
          <li><b>Main Event:</b> {linkObject.tournamentstart}  - {linkObject.tournamentstart} </li>
        </ul>

        <h3 className='rules-heading'><b>Tournament Overview</b></h3>
        <ul>
          <li><b>Prize Pool:</b> INR {linkObject.prize}</li>
          <li>1st Place: INR 50,000</li>
          <li>2nd Place: INR 30,000</li>
          <li>3rd Place: INR 20,000</li>
        </ul>
      

        <h3 className='rules-heading'><b>General Rules</b></h3>
        <ul>
          <li>No sharing of accounts or aliases. Violations lead to disqualification.</li>
          <li>Substitutes allowed. Final roster is locked after tournament starts. Only 1 change is allowed for LAN events.</li>
          <li>Any abuse of staff or other violations may lead to temporary bans or disqualification.</li>
          <li>Players must be 16 years or older.</li>
        </ul>

        <h3 className='rules-heading'><b>Match Procedures</b></h3>
        <ul>
          <li>Lineup must be reported 30 minutes before game time.</li>
          <li>Map veto conducted on mapban.gg.</li>
          <li>5-minute break between maps allowed.</li>
          <li>Winning captain posts a screenshot of the end game scoreboard on discord.</li>
        </ul>

        
      </div>

      <div className='countries-section'>
        <p className='country'><b>Countries</b></p>
        <img src={Flag} alt='flag' className='flag' />
      </div>
      <hr className='white-line' />
      <p className='sub-title'>Information</p>

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
    <Footer/>
        </div>
  )
}

export default upcoming1
