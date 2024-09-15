import React from 'react';
import './../pages.css'; 

const players = [
  {
    name: 'Lilghost',
    image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240418/JlVpevZB.png',
   },
  {
    name: 'Shou',
    image: 'https://wstatic-prod-boc.krafton.com/common/player/20240519/m1xGxDpj/shou.png',
  
  },
  {
    name: 'SuJiu',
    image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240418/NcPKBd1X.png',
  },
  {
    name: 'Xbei',
    image: 'https://wstatic-prod-boc.krafton.com/entry/player/20240418/k92Cl8fS.png',
  }
];

const PlayerInfo = () => {
  return (
    <div className="player-info-container">
      {players.map((player, index) => (
        <div key={index} className="player-card">
          <img src={player.image} alt={player.name} className="player-image" />
          <h2 className="player-name">{player.name}</h2>
      
        
       
        </div>
      ))}
    </div>
  );
};

export default PlayerInfo;
