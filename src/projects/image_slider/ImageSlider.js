import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1',
  'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2',
  'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3',
  'https://via.placeholder.com/600x400/57FF33/FFFFFF?text=Image+4'
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative flex justify-center items-center max-w-2xl mx-auto my-10">
      <button
        className="absolute left-0 text-2xl text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === current ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0 transition-opacity duration-1000'}
        >
          {index === current && (
            <img src={image} alt={`Slide ${index}`} className="w-full rounded" />
          )}
        </div>
      ))}
      <button
        className="absolute right-0 text-2xl text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
