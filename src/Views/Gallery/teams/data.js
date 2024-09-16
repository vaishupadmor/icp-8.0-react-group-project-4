import React from 'react';
import './teams.css'; 

const tournament = {
  name: '...Tournament Teams...',
  participants: [
    {
      name: '17Gaming',
      image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240418/4hdPxuri.png',
    },
    {
      name: 'Four Angry Men',
      image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240418/vll3G4ZY.png',
    },
    {
      name: 'Gen.G',
      image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240314/RKlcpVuP.png',
    },
    {
        name: 'CERBERUS Esports',
        image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240322/ysMVNYKb.png',
      },
      {
        name: 'Petrichor Road',
        image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240418/2euAdQi0.png',
      }
  ]
};

const TournamentPage = () => {
  return (
    <div className="tournament-page">
      <div className="tournament-header">
        <h1 className="tournament-name">{tournament.name}</h1>
      </div>
      <div className="participants-gallery">
        {tournament.participants.map((participant, index) => (
          <div key={index} className="participant-card">
            <img src={participant.image} alt={participant.name} className="participant-image" />
            <h3 className="participant-name">{participant.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentPage;
