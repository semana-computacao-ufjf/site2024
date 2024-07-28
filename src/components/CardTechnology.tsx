"use client";
import NextImage from "next/image";

interface CardProps {
    title?: string;
    image: string;
    description?: string;
  }
  export default function CardTechnology({ title, image, description }: CardProps) {
    return (
      <div className="relative card w-4/5  sectionBreak:h-card-height border-1 rounded-xl border-codePurple mt-16">
        <div>
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
            <NextImage
              src={image}
              alt={title || "Image"}
              width={100}
              height={100}
              className="rounded-full "
            />
          </div>
          <h1 className="text-center font-viga text-2xl sm:text-3xl uppercase pt-16">
            <strong>{title}</strong>
          </h1>
        </div>
        <p className="mt-3 text-center font-quicksand text-base sm:text-lg md:text-xl px-2 pb-4 lg:text-2xl">
          {description}
        </p>
      </div>
    );
  }