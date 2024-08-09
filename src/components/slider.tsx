"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
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
    <div className="w-full   min-h-[130px] relative">
      <div ref={wrapperRef} className="flex absolute animate-slide space-x-40">
        {images.concat(images, images).map((image, index) => (
          <Image
            width={150}
            height={130}
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="max-h-[130px] max-w-[150px] "
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
