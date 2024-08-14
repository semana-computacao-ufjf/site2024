"use client";
import React, { useState } from "react";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden w-full h-[300px] md:h-[500px] relative">
      <div
        className="flex w-full h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div
        className="absolute top-0 left-0 h-full w-1/2 cursor-pointer"
        onClick={handlePrev}
      />
      <div
        className="absolute top-0 right-0 h-full w-1/2 cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
};

export default Slider;
