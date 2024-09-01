"use client";
import React, { useState } from "react";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveringLeft, setHoveringLeft] = useState(false);
  const [hoveringRight, setHoveringRight] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden w-full h-[300px] md:h-[675px] relative rounded-3xl">
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
        onMouseEnter={() => setHoveringLeft(true)}
        onMouseLeave={() => setHoveringLeft(false)}
      >
        <Image
          src="/images/arrow-left.png"
          alt="Left Arrow"
          width={100}
          height={100}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
            hoveringLeft ? "opacity-100" : "opacity-20"
          }`}
        />
      </div>

      <div
        className="absolute top-0 right-0 h-full w-1/2 cursor-pointer"
        onClick={handleNext}
        onMouseEnter={() => setHoveringRight(true)}
        onMouseLeave={() => setHoveringRight(false)}
      >
        <Image
          src="/images/arrow-right.png"
          alt="Right Arrow"
          width={100}
          height={100}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
            hoveringRight ? "opacity-100" : "opacity-20"
          }`}
        />
      </div>
    </div>
  );
};

export default Slider;
