import React, { useState } from 'react';
import Hello from '../../Home/h1';
import TotalGaming from '../../Teams/TotalGaming';
import Menu from '../Menu';
import Vitality from '../../Teams/Vitality';
import VelocityGaming from '../../Teams/velocityGaming';
import Soul from '../../Teams/Soul';
const Services = () => {
  const [game, setGame] = useState(null);

  const renderPage = () => {
    switch (game) {
      case 'totalgaming':
        return <TotalGaming />;
      case 'bl4ze':
        return <Soul/>;
      case 'Vitality':
        return <Vitality/>;
      case 'football':
        return <VelocityGaming/>;
      case 'tennis':
        return <h1>Table Tennius</h1>; 
      case 'hockey':
        return <h1>Hockey </h1>; 
      default:
        return null;
    }
  };

  return (
    <div>
      <Menu setGame={setGame} />
      <div className="cards-container">
        {renderPage()}
      </div>
    </div>
  );
};

export default Services;
