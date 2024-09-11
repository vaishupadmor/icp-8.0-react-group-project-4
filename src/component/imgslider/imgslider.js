import React, { useState, useEffect } from 'react';
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
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>Previous</button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;