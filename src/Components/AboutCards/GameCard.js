import React from 'react';
import './GameCard.css'; 

function GameCard({ image, title, description }) {
    return (
        <div className="game-card">
            <img src={image} alt={title} className="game-card-image" />
            <h3 className="game-card-title">{title}</h3>
            <p className="game-card-description">{description}</p>
        </div>
    );
}

export default GameCard;
