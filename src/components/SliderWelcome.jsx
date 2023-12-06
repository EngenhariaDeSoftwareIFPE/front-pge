"use client";

import React, { useEffect, useState } from 'react';

const images = ["welcome.png", "welcome2.png", "welcome3.png"]; 

const SliderWelcome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-64 ms-24 mt-5 bg-green-400 rounded-xl">
      <div>
        <img
          src={images[currentImageIndex]}
          alt=""
          className="w-[1123px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default SliderWelcome;
