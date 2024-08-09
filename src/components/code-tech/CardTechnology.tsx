"use client";
import NextImage from "next/image";
import { quickSand } from "@/app/fonts";

interface CardProps {
    title?: string;
    image: string;
    description?: string;
  }
  export default function CardTechnology({ title, image, description }: CardProps) {
    return (
      <div className="relative card w-card-width h-card-heihgt border-1 rounded-xl border-codePurple mt-16">
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
          <h1 className="text-center text-2xl sm:text-3xl uppercase pt-16 text-black">
            <strong>{title}</strong>
          </h1>
        </div>
        <p className={`mt-3 text-center  text-2xl card-responsive3:text-lg card-responsive2:text-xl font-extralight card-responsive:text-2xl px-8 pb-4 text-black ${quickSand.className}`}>
        {description}
        </p>
      </div>
    );
  }