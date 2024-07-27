"use client";
import NextImage from "next/image";

interface CardProps {
    title?: string;
    image?: string;
    description?: string;
  }
export default function CardTechnology({title, image, description}:CardProps) {
  return (
    <>
    <div className="card w-card-width h-card-heihgt  border-1 rounded-xl border-purpleCode" >
        
        <h1 className="mt-24 text-center font-viga text-2xl px-4 uppercase"> <strong>{title}</strong></h1>
        <p className="mt-3 text-center font-quicksand text-2xl px-8">{description}</p>
    </div>
    </>
  )
}