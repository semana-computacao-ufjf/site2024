"use client";
import React, { useEffect, useRef } from "react";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const duration = 50;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.animationDuration = `${duration}s`;
    }
  }, [duration]);

  return (
    <div className="overflow-hidden w-full h-[130px] relative">
      <div
        ref={wrapperRef}
        className="flex absolute animate-slide w-[calc(100%*3)]"
      >
        {images.concat(images, images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-[calc(100%/6)] h-[130px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
