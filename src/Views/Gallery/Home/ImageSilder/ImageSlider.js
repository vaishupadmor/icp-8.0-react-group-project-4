import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 

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
      </div>
  );
};

export default ImageSlider;