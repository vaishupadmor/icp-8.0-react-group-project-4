import React, { useState } from 'react';
import Hello from '../../Home/h1';
import Badminton from '../../Badminton/Badminton';
import Menu from '../Menu';

const Services = () => {
  const [game, setGame] = useState(null);

  const renderPage = () => {
    switch (game) {
      case 'badminton':
        return <Badminton />;
      case 'volleyball':
        return <Hello />;
      case 'basketball':
        return <Hello />;
      case 'football':
        return <Badminton />;
      case 'tennis':
        return <Hello />; // Add appropriate component for tennis
      case 'hockey':
        return <Hello />; // Add appropriate component for hockey
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
