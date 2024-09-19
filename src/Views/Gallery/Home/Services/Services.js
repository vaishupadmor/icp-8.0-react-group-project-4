import React, { useState } from 'react';
import Hello from '../../Home/h1';
import Badminton from '../../Teams/TotalGaming';
import Menu from '../Menu';
import VolleyBall from '../../Teams/Vitality';

const Services = () => {
  const [game, setGame] = useState(null);

  const renderPage = () => {
    switch (game) {
      case 'badminton':
        return <Badminton />;
      case 'volleyball':
        return <h1>Volley bAll</h1>;
      case 'basketball':
        return <VolleyBall/>;
      case 'football':
        return <h1>Foot Ball</h1>;
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
