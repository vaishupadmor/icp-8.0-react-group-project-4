import React, { useState } from 'react';
import Hello from '../../Home/h1';
import GodLike from '../../Teams/GodLike';
import Menu from '../../Home/Menu';
import Vitality from '../../Teams/Vitality';
import Xsaprk from '../../Teams/Xspark';
import Soul from '../../Teams/Soul';
import ImageSlider from '../../../../Components/ImgSlider/ImgSlider1';


const images = [
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/37425-0a25b1bd64be7b4413fdb7f26fe18283-1.jpg?w=1200&ssl=1',
  
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/0ac79-16223873131183-1-1.jpg?w=800&ssl=1',
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/Untitled-design-3.jpg?w=1280&ssl=1',
  'https://i.pinimg.com/originals/07/56/30/0756304ee12cfbcd68ca5462766ad3c5.jpg',
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/image-1.png?w=752&ssl=1',
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/Untitled-design-2.jpg?w=1280&ssl=1',
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/godlike.jpg?w=1280&ssl=1',
  'https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/05/SouL-Esports.jpg?w=1200&ssl=1',
  
];

const Services = () => {
  const [game, setGame] = useState(null);

  const renderPage = () => {
    switch (game) {
      case 'godlike':
        return <GodLike />;
      case 'soul':
        return <Soul/>;
      case 'Vitality':
        return <Vitality/>;
      case 'Xspark':
        return <Xsaprk/>;
      default:
        return <img className='default-page' src="https://i0.wp.com/blogs.rooter.gg/wp-content/uploads/2024/01/e86fd-esports.jpg?fit=1280%2C960&ssl=1"/>;
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
