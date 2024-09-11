import React, { useState, useEffect } from 'react';
import lessthan from "./less-than.png"
import greaterthan from "./greater-than.png"
import './imgslider.css'; 

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
      <div className="slider-buttons">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}><img src={lessthan} className='slide-img'/></button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}><img src={greaterthan} className='slide-img'/></button>
      </div>
    </div>
  );
};

export default ImageSlider;